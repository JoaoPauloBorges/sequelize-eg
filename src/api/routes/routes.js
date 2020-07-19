const express =  require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({hello: 'world'});
});


router.post('/users', async (req, resp) => {
   const {name, email, password_hash} = req.body;
   const user = await UserController.create({name, email, password_hash});
   resp.json(user);
});

router.get('/users', async (req, resp) => {
    const users = await UserController.list();
    resp.json(users);
 });

module.exports = router;