const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.get('/', async (req, res, next) => {
    const userId = req?.session?.userData?.user_id;
    console.log(req.session)
    if (!userId) {
        return res.status(401).send({
            ok: false, error: 'Please login and try again'
        })
    }

    const itemData = await database.executeQuery({
        query: 'SELECT item_name, expiry_date, quantity FROM items_info WHERE user_id = ?',
        values: [userId]
    });

    if ('error' in itemData) {
        return res.status(500).send({
            ok: false, error: itemData.error.userError
        });
    }

    // itemData.forEach(element => {
    //     if (element.picture && typeof element.picture === 'string') {
    //         element.image = Buffer.from(element.picture).toString('base64');
    //     } else {
    //         element.image = '';
    //     }
    // });

    return res.status(200).send({
        ok: true, data: itemData
    });
});

module.exports = router;