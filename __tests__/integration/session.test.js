const loader = require('../../src/loaders/sequelize');
const User = require('../../src/models/User');

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        loader();
        const user = await User.create({ name: 'Joao', email: 'joao@gmail.com', password_hash: '123123' });
        console.log(user);

        expect(user.name).toBe('Joao');
    });
});
