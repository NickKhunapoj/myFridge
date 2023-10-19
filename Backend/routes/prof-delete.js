const express = require('express');
const router = express.Router();  

const database = require('../shared/database');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
require('dotenv').config({ path: __dirname + '../../../.env' });

// DELETE endpoint to delete a user profile
router.delete('/', async (req, res, next) => {
  const tokenInput = req.headers.authorization;
  var user_id = req.query.user_id
  console.log("3333333333333333333333333333333", user_id);
  try {
    if (!req.session.userData) {
      return res.status(401).send({
        ok: false,
        error: 'Please login and try again later!'
      });
    }

    const updateQuery = {
      query: 'DELETE FROM user_info WHERE user_id = ?',
      values: [user_id]
    };

    const userData = await database.executeQuery(updateQuery);

    if ('error' in userData) {
      return res.status(500).send({
        ok: false,
        error: 'An error occurred while deleting the account.'
      });
    }

    return res.status(200).send({
      ok: true,
      data: userData
    });
  } catch (error) {
    console.error('Error deleting account:', error);
    return res.status(500).send({
      ok: false,
      error: 'An error occurred while deleting the account.'
    });
  }
});

module.exports = router;
