const express = require('express');
const bcrypt = require('bcrypt');

const database = require('../shared/database');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        // const auth = req.body;
        // const base64 = auth.slice(6);
        // const decode = Buffer.from(base64, 'base64').toString('utf-8');

        // const userId = decode.split(':')[0];
        // const password = decode.split(':').slice(1).join(':');
        console.log(req.body)
        const userId = req.body.username;
        const password = req.body.password;

        const {email, dpname, dob} = req.body;
        console.log('pass')

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(req.body)

        const userData = await database.executeQuery({
            query: 'INSERT INTO user_info(email, display_name, username, password, dob) VALUES (?, ?, ?, ?, ?)',
            values: [email, dpname, userId, hashedPassword, dob]
        });
        if ('error' in userData) {
            return res.status(500).send({
                ok: false, error: userData.error.userError
            });
        }

        req.session.userData = {
            user_id: userId,
            email
        };
        return res.status(200).send({
            ok: true
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;