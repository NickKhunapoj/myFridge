const express = require('express');
const router = express.Router();
const database = require('../shared/database');

router.delete('/:itemId', async (req, res, next) => {
    try {
        if (!req.session.userData) {
            return res.status(401).send({
                ok: false,
                error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;
        const itemId = req.params.itemId;

        const updateQuery = {
            query: 'UPDATE item SET is_removed = 1 WHERE user_id = ? AND items_id = ?',
            values: [userId, itemId]
        };

        const cartData = await database.executeQuery(updateQuery);

        if ('error' in cartData) {
            return res.status(500).send({
                ok: false,
                error: 'An error occurred while deleting the item.'
            });
        }

        return res.status(200).send({
            ok: true,
            data: cartData
        });
    } catch (error) {
        console.error('Error deleting item:', error);
        return res.status(500).send({
            ok: false,
            error: 'An error occurred while deleting the item.'
        });
    }
});

module.exports = router;
