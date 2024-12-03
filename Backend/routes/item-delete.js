const express = require("express");
const router = express.Router();

const database = require("../shared/database");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "../../../.env" });

router.delete("/", async (req, res, next) => {
  try {
    const tokenInput = req.headers.authorization;

    if (!tokenInput) {
      return res.status(401).send({
        ok: false,
        error: "Unauthorized Request: No Authorization Header",
      });
    }

    const tokenContent = tokenInput.split(" ")[1];

    jwt.verify(tokenContent, process.env.JWT_SIGN_SECRET, async (err, data) => {
      if (err) {
        return res.status(401).send({
          ok: false,
          error: "Unauthorized Request",
        });
      }

      const userId = data.user_id; // Extract user ID from the token payload
      const items_id = req.query.items_id;

      if (!items_id) {
        return res.status(400).send({
          ok: false,
          error: "Bad Request: items_id is required",
        });
      }

      // Proceed with deletion
      const updateQuery = {
        query: "DELETE FROM items_info WHERE items_id = ? AND user_id = ?",
        values: [items_id, userId],
      };

      const cartData = await database.executeQuery(updateQuery);

      if ("error" in cartData) {
        return res.status(500).send({
          ok: false,
          error: "An error occurred while deleting the item.",
        });
      }

      // Check if any row was deleted
      if (cartData.affectedRows === 0) {
        return res.status(404).send({
          ok: false,
          error:
            "Item not found or you do not have permission to delete this item.",
        });
      }

      return res.status(200).send({
        ok: true,
        message: "Item successfully deleted.",
      });
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).send({
      ok: false,
      error: "An error occurred while deleting the item.",
    });
  }
});

module.exports = router;
