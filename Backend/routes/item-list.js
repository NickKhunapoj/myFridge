const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.get('/', async (req, res, next) => {
    const itemData = await database.executeQuery({
        query: 'SELECT * FROM item',
        values: []
    });

    if ('error' in itemData) {
        return res.status(500).send({
            ok: false, error: itemData.error.userError
        });
    }

    itemData.forEach(element => {
        element.image = Buffer.from(element.picture).toString('base64');
    });

    return res.status(200).send({
        ok: true, data: itemData
    });
});

module.exports = router;