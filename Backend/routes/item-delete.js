const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.get('/', async (req, res, next) => {
    try {
        if (!req.session.userData) {
            return res.status(401).send({
                ok: false, error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;
        const itemId = req.query.items_id;
        const cartData = await database.executeQuery({
            query: 'UPDATE item SET is_removed = 1  WHERE  user_id = ? AND items_id = ?',
            values: [userId, itemId]
        });

        if ('error' in cartData) {
            return res.status(500).send({
                ok: false, error: cartData.error.userError
            });
        }

        return res.status(200).send({
            ok: true, data: cartData
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;