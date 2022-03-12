const mongoose = require('mongoose');

const userSchema = new mongoose.Schema;({
    name:{
        type:String
    },
    mail:{
        type:String
    },
    password:{
        type:String
    },
    game:{
        type:String
    },
},{timestamp: true})
const User = mongoose.model('User', userSchema);
module.export = User;
