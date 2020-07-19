const Sequelize = require('sequelize');
const postgresConf = require('../config/database');
const User = require('../models/User');

const sequelizeLoader = () => {
    const sequelize = new Sequelize(postgresConf);

    User.init(sequelize);
    return sequelize.models;
}
module.exports = sequelizeLoader;