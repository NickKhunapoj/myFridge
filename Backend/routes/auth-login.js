const express = require("express");
const bcrypt = require("bcrypt");
const database = require("../shared/database");
const { createClient } = require("redis");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Initialize Redis client
const redisClient = createClient();
redisClient.on("error", (err) => console.error("Redis Client Error:", err));

(async () => {
  await redisClient.connect();
})();

router.get("/", async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    // Validate the Authorization header
    if (!auth || !auth.startsWith("Basic ")) {
      return res.status(400).send({ error: "Invalid Authorization header" });
    }

    // Decode Base64 credentials
    const base64Credentials = auth.slice(6); // Remove 'Basic ' prefix
    const decodedCredentials = Buffer.from(
      base64Credentials,
      "base64"
    ).toString("utf8");
    const [userId, password] = decodedCredentials.split(":");

    // Query the database for the user
    const userData = await database.executeQuery({
      query: "SELECT * FROM user_info WHERE email = ? OR username = ?",
      values: [userId, userId],
    });

    if (userData.length === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    // Verify the password using bcrypt
    const match = await bcrypt.compare(password, userData[0].password);
    if (!match) {
      return res
        .status(401)
        .send({ error: "Incorrect password. Please try again later." });
    }

    // Remove sensitive data before signing the JWT
    delete userData[0].password;

    // Sign the JWT
    const jwtSecret = process.env.JWT_SIGN_SECRET || "default_secret_key";
    const userSigned = jwt.sign(JSON.stringify(userData[0]), jwtSecret);

    console.log("JWT Signed:", userSigned);

    // Save JWT in Redis
    await redisClient.set(userId, userSigned);

    // Respond with success
    return res.status(200).send({
      ok: true,
      token: userSigned,
      message: "Successfully logged in!",
    });
  } catch (error) {
    console.error("Unhandled error during login:", error.message, error.stack);
    next(error); // Pass the error to the Express error handler
  }
});

module.exports = router;