const express = require('express');
const router = express.Router();

const database = require('../shared/database');

// DELETE endpoint to delete a user profile
router.delete('/:user_id', async (req, res, next) => {
  try {
    const { email } = req.params;

    // Check if the user exists
    const user = await database.executeQuery({
      query: 'SELECT * FROM user_info WHERE email = ?',
      values: [email],
    });

    if (user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user profile
    const deleteUser = await database.executeQuery({
      query: 'DELETE FROM user_info WHERE email = ?',
      values: [email],
    });

    return res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
