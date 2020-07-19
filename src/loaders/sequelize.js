const Sequelize = require('sequelize');
const postgresConf = require('../config/database');
const User = require('../models/User');

module.exports = () => {
    const conn = new Sequelize(postgresConf);

    User.init(conn);
    return conn;
}