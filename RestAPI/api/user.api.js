const { insert, getAll, getById, updateById, removeById } = require('../dao/user.dao');

const createUser = async ({ fullname, age, grade }) => {

    const user = {
        fullname, age, grade
    }
    return await insert(user);

}

const getAllUsers = async () => {
    return await getAll();
}

const getUniqueUser = async (id) => {
    return await getById(id);
}

const deleteUser = async (id) => {
    return await removeById(id);
}

const updateUser = async (id, { fullname, age, grade }) => {
    const user = {
        fullname, age, grade
    }
    return await updateById(id, user)
}

module.exports = {
    createUser,
    getAllUsers,
    getUniqueUser,
    deleteUser,
    updateUser
}