const model = require('../models');
const Users = model.Users;

const getAllUsers = async () => {
    return await Users.findAll();
};

const createUser = async (userData) => {
    return await Users.create(userData);
};
module.exports = {
    getAllUsers,
    createUser
};