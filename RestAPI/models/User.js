const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    }

})

const user = mongoose.model("user",userSchema);
module.exports = user;