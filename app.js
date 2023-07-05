const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Allow-Control-Origin', '*');
    res.setHeader('Access-Allow-Control-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Allow-Control-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed', feedRoutes);

app.listen(8080);