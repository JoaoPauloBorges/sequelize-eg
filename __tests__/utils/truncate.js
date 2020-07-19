const models = require('../../src/loaders/sequelize')();

module.exports = () => {
    return Promise.all(Object.keys(models)
        .map(key => models[key].destroy({ truncate: true, force: true }))
    );
}
