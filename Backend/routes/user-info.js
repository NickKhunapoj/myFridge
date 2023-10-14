const express = require('express');
const router = express.Router();

const database = require('../shared/database');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: __dirname + '../../../.env' });

router.get('/', async (req, res, next) => {
    const tokenInput = req.headers.authorization;
    console.log("Request Auth Info: ", tokenInput);
    var tokenContent = tokenInput.split(" ")[1];
    
    jwt.verify(tokenContent, process.env.JWT_SIGN_SECRET, async (err, data) => {
        if (err) {
            return res.status(401).send({
                ok: false, error: 'Unauthorized Request'
            });
        }
        console.log(data.user_id)
        const userData = await database.executeQuery({
            query: 'SELECT email, display_name, username FROM user_info WHERE user_id = ?',
            values: [data.user_id]
        });

        if ('error' in userData) {
            return res.status(500).send({
                ok: false, error: userData.error.userError
            });
        }

	console.log(userData)

        return res.json({
            ok: true,
            data: userData[0]
        });
    });
});

module.exports = router;