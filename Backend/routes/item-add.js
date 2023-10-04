const express = require('express');
const router = express.Router();

const database = require('../shared/database');
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: __dirname + '../../../.env' });

router.post('/', async (req, res, next) => {
    const { item_name, quantity, expiry_date } = req.body;

    const tokenInput = req.headers.authorization;
    console.log("Request Auth Info: ", tokenInput)
    var tokenContent = tokenInput.split(" ")[1]
    jwt.verify(tokenContent, process.env.JWT_SIGN_SECRET, async (err, data) => {
        if (err){
            return res.status(401).send({
                ok: false, error: 'Unauthorized Request'
            });
        }
        const userId = data.user_id

        const itemData = await database.executeQuery({
            query: 'INSERT INTO items_info( user_id, item_name, quantity, expiry_date) VALUES (?, ?, ?, ?)',
            values: [userId, item_name, quantity, expiry_date]
        });
        if ('error' in itemData) {
            return res.status(500).send({
                ok: false, error: itemData.error.userError
            });
        }
    
        return res.status(200).send({
            ok: true
        });
    })

 
});

module.exports = router;