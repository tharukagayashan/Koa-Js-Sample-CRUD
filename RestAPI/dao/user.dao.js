const User = require('../models/User');

const insert = async ({fullname,age,grade}) =>{
    const result = await User.create({fullname,age,grade});
    return result;
}

const getAll = async () =>{
    const users = await User.find();
    return users;
}

const getById = async (id) =>{
    return await User.findById(id);
}

const updateById = async (id,{fullname,age,grade}) =>{
    const result = await User.findByIdAndUpdate(id,{fullname,age,grade});
    return result;
}

const removeById = async (id) =>{
    await User.findByIdAndDelete(id);
}

module.exports = {insert,getAll,getById,updateById,removeById}