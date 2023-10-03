require('dotenv').config();

const express = require('express');

const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors')

const authRegister = require('./routes/auth-register');
const authLogout = require('./routes/auth-logout');
const authLogin = require('./routes/auth-login');
const authCheck = require('./routes/auth-check');

// const picUpload = require('./routes/pic-upload');
const profEdit = require('./routes/prof-edit');
const profDelete = require('./routes/prof-delete');

const itemAdd = require('./routes/item-add');
const itemEdit = require('./routes/item-edit');
const itemList = require('./routes/item-list');
const itemDelete = require('./routes/item-delete');

const app = express();
const port = 1500;

app.use('*', cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'uiktuttjthjttyjtyjtytyjjsdzdxbxbxv5353',
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 3600000,
        sameSite: 'Strict',
    },
    name: 'project151-cookie'
}));

app.get('/', (req, res) => {
    res.redirect('/home.html');
});

// Auth Routing
app.use('/auth/register', authRegister);
app.use('/auth/logout', authLogout);
app.use('/auth/login', authLogin);
app.use('/auth/check', authCheck);

// Profile info
app.use('/prof/edit', profEdit);
app.use('/prof/delete', profDelete);
// app.use('/pic/upload', picUpload);

// Item Routing
app.use('/item/list', itemList);

// Shopping Cart Routing
app.use('/item/add', itemAdd);
app.use('/item/edit', itemEdit);
app.use('/item/delete', itemDelete);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({

        ok: false,
        error: 'Server Error!'
    });
});
app.listen(port, () => {
    console.log(`Project151 API is listening on port ${port}`)
});
