const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.put('/:items_id', async (req, res, next) => {
    const { item_name, quantity, expiry_date } = req.body;
    const { items_id } = req.params;

    try {
        if (!req.session.userData) {
            return res.status(401).send({
                ok: false, error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;

        const updateData = await database.executeQuery({
            query: 'UPDATE items_info SET item_name = ?, quantity = ?, expiry_date = ? WHERE items_id = ? AND user_id = ?',
            values: [item_name, quantity, expiry_date, items_id, userId]
        });

        if ('error' in updateData) {
            return res.status(500).send({
                ok: false, error: updateData.error.userError
            });
        }

        return res.status(200).send({
            ok: true
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
