const express = require('express');
const bcrypt = require('bcrypt');

const database = require('../shared/database');

const router = express.Router();
var CryptoJS = require("crypto-js");

router.get('/', async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const decode = atob(auth.slice(5));
        const credentials = decode.split(":");
        console.log(credentials);
        const userId = credentials[0].trim();
        const password = CryptoJS.AES.decrypt(credentials[1],credentials[0]).toString(CryptoJS.enc.Utf8);
        // console.log(process.env.SECRET_AES_KEY)
        console.log(`userID : ${userId} , password : ${password.toString()}`);

        // get user data from database
        const userData = await database.executeQuery({
            query: 'SELECT * FROM user_info WHERE email = ? or username = ?',
            values: [userId, userId]
        });

        if (userData.length == 0) {
            return res.status(404).send({
                ok: false,
                error: 'user not found'
            });
        }

        // check if password is matched from user input & database
        const match = await bcrypt.compare(password, userData[0].password);
        if (match) {
            // remove key from object
            delete userData[0].password;

            // set user session & send result as success
            req.session.userData = userData[0];
            return res.status(200).send({
                ok: true,
                data: userData[0],
                message: 'Successfully Login!'
            });
        }

        // destroy any session & send result as fail
        req.session.destroy();
        return res.status(401).send({
            ok: false,
            error: 'Password incorect, Please try again later!'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;