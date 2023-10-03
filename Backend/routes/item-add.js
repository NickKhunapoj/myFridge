const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.post('/', async (req, res, next) => {
    const { item_name, quantity, expiry_date } = req.body;

    if (!req.session.userData) {
        return res.status(401).send({
            ok: false, error: 'Please login and try again later!'
        });
    }

    const userId = req.session.userData.user_id;

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
});

module.exports = router;