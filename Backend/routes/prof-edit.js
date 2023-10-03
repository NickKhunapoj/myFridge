const express = require('express');
const router = express.Router();

const database = require('../shared/database');

router.patch('/email', async (req, res, next) => {
    try {
        // Check if the user is authenticated
        if (!req.session.userData) {
            return res.status(401).send({
                ok: false,
                error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;
        const { newEmail } = req.body;

        // Update the email in the database
        const updateEmail = await database.executeQuery({
            query: 'UPDATE user_info SET email = ? WHERE user_id = ?',
            values: [newEmail, userId]
        });

        if ('error' in updateEmail) {
            return res.status(500).send({
                ok: false, error: updateEmail.error.userError
            });
        }

        req.session.userData.email = newEmail;
        return res.status(200).send({
            ok: true
        });
    } catch (error) {
        next(error);
    }
});

router.patch('/displayname', async (req, res, next) => {
    try {
        const { newDisplayName } = req.body;

        if (!req.session.userData) {
            return res.status(401).send({
                ok: false, error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;

        // Update the display name in the database
        const updateDisplayName = await database.executeQuery({
            query: 'UPDATE user_info SET display_name = ? WHERE user_id = ?',
            values: [newDisplayName, userId]
        });

        if ('error' in updateDisplayName) {
            return res.status(500).send({
                ok: false, error: updateDisplayName.error.userError
            });
        }

        req.session.userData.display_name = newDisplayName;
        return res.status(200).send({
            ok: true
        });
    } catch (error) {
        next(error);
    }
});

router.patch('/username', async (req, res, next) => {
    try {
        const { newUsername } = req.body;

        if (!req.session.userData) {
            return res.status(401).send({
                ok: false, error: 'Please login and try again later!'
            });
        }

        const userId = req.session.userData.user_id;

        // Update the display name in the database
        const updateDisplayName = await database.executeQuery({
            query: 'UPDATE user_info SET username = ? WHERE user_id = ?',
            values: [newUsername, userId]
        });

        if ('error' in updateDisplayName) {
            return res.status(500).send({
                ok: false, error: updateUserame.error.userError
            });
        }

        req.session.userData.username = newUsername;
        return res.status(200).send({
            ok: true
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
