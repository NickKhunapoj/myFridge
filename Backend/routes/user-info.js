const express = require('express');
const router = express.Router();

const database = require('../shared/database');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
require('dotenv').config({ path: __dirname + '../../../.env' });

// Function to fetch the item count for a user based on their token
const fetchUserData = async (token, res) => {
    try {
        const tokenContent = token.split(" ")[1];

        jwt.verify(tokenContent, process.env.JWT_SIGN_SECRET, async (err, data) => {
            if (err) {
                return res.status(401).send({
                    ok: false, error: 'Unauthorized Request'
                });
            }

            console.log(data.user_id);

            const expireData = await database.executeQuery({
                query: 'SELECT display_name AS userData FROM user_info WHERE user_id = ?',
                values: [data.user_id]
            });

            if ('error' in expireData) {
                return res.status(500).send({
                    ok: false, error: expireData.error.userError
                });
            }

            console.log(expireData);

            return res.json({
                ok: true,
                userData: expireData[0].userData,
                data: expireData
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            ok: false, error: 'An error occurred while fetching user data.'
        });
    }
};

router.get('/', async (req, res, next) => {
    const tokenInput = req.headers.authorization;
    console.log("Request Auth Info: ", tokenInput);

    // Call the fetchuserData function to fetch the item count
    fetchUserData(tokenInput, res);
});

module.exports = router;