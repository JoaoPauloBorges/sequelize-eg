const express = require('express');
const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');


const app = function () {
    const app = express();
    expressLoader(app);
    console.log('Express Intialized');

    sequelizeLoader();
    console.log('Database Intialized');

    return app;
}

module.exports = app;