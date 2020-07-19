const request = require('supertest');

const app = require('../../src/loaders');
const truncate = require('../utils/truncate');
const userFactory = require('../utils/factories/user.factory');

describe('Users api testing', () => {

    beforeEach(async () => {  //carrega a conexão e apaga os dados do banco
        await truncate();
    });

    it('should create a user', async () => {
        const user = await userFactory({ name: 'Joao' });
        expect(user.name).toBe('Joao');
    });

    it('should retrive all users', async () => {
        const name = 'Joao';
        await userFactory({ name });
        const response = await request(app()).get('/users');
        const userName = response.body[0].name;
        expect(response.status).toBe(200);
        expect(userName).toBe(name);
    });

});
