const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.put('/:item_id', async (req, res, next) => {
    const { item_name, quantity, expiry_date } = req.body;
    const { item_id } = req.params;

    try {
        if (!req.session.userData) {
            return res.status(401).send({
                ok: false, error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;

        // Check if the user has permission to update this item
        const itemPermission = await database.executeQuery({
            query: 'SELECT user_id FROM items_info WHERE item_id = ?',
            values: [item_id]
        });

        if (itemPermission[0].user_id !== userId) {
            return res.status(403).send({
                ok: false, error: 'You do not have permission to update this item.'
            });
        }

        const updateData = await database.executeQuery({
            query: 'UPDATE items_info SET item_name = ?, quantity = ?, expiry_date = ? WHERE item_id = ? AND user_id = ?',
            values: [item_name, quantity, expiry_date, item_id, userId]
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
