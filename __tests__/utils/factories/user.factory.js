// test/factories/user.factory.js
const faker = require('faker');
const models = require('../../../src/loaders/sequelize')();

/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       An object to build the user from.
 */
const data = async (props = {}) => {
    const defaultProps = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password_hash: faker.internet.password()
    };
    return Object.assign({}, defaultProps, props);
};
/**
 * Generates a user instance from the properties provided.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       A user instance
 */
async function generateUser(props = {}) {
    return models.User.create(await data(props));
}

module.exports = generateUser;