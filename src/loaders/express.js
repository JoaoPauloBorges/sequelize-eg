const routes = require('../api/routes/routes');
const express = require('express');

const expressLoader = async function (app) {
    app.use(express.json());
    app.use('/',routes);

    // ...More middlewares
    return app;
}

module.exports = expressLoader;