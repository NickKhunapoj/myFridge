const express = require("express");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3");

const database = require("../shared/database");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const userId = req.body.username;
    const password = req.body.password;
    const { email, dpname, dob } = req.body;

    // Check if the email already exists in the database
    const existingUser = await database.executeQuery({
      query: "SELECT * FROM user_info WHERE email = ?",
      values: [email],
    });

    if (existingUser.length > 0) {
      return res.status(409).send({
        ok: false,
        error: "Email already exists in the database.",
      });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into user_info table
    const userData = await database.executeQuery({
      query:
        "INSERT INTO user_info(email, display_name, username, password, dob) VALUES (?, ?, ?, ?, ?)",
      values: [email, dpname, userId, hashedPassword, dob],
    });

    // Validate the insertion result
    if ("error" in userData) {
      return res.status(500).send({
        ok: false,
        error: userData.error.message,
      });
    }

    // Fetch the last inserted ID explicitly if it's not returned directly
    const lastInsertedIdResult = await database.executeQuery({
      query: "SELECT last_insert_rowid() AS id",
    });

    const lastInsertedId = lastInsertedIdResult[0]?.id;
    if (!lastInsertedId) {
      return res.status(500).send({
        ok: false,
        error: "Failed to retrieve the last inserted user ID.",
      });
    }

    // Insert user settings into app_settings_info table
    const userDataSettings = await database.executeQuery({
      query:
        "INSERT INTO app_settings_info(user_id, expire_3days, expire_5days, expire_1week, no_noti) VALUES (?, 0, 0, 0, 1)",
      values: [lastInsertedId],
    });

    if ("error" in userDataSettings) {
      return res.status(500).send({
        ok: false,
        error: userDataSettings.error.message,
      });
    }

    req.session.userData = {
      user_id: lastInsertedId,
      email,
    };

    return res.status(200).send({
      ok: true,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;