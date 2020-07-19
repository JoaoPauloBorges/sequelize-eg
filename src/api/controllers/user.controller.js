const User = require('../../models/User');

exports.create = async ({name, email, password_hash}) => {
    const user = await User.create({name, email, password_hash});
    return user;
}

exports.list = async () => {
    const users = await User.findAll();
    return users;
}