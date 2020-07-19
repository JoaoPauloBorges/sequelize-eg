const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');

// require('dotenv').config({
//     path: process.env.NODE_ENV === 'teste' ? '.env.test': '.env'
// });

const loader = async function (app) {
    await expressLoader(app);
    console.log('Express Intialized');

    await sequelizeLoader();
    console.log('Database Intialized');

}

module.exports = loader;