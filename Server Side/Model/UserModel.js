const mongoose = require ("mongoose");
const validator = require ("validator");



//schema

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true, 'Name is Require']
    },
    

    email:{
        type:String,
        required:[true, 'Email is Require'],
        unique: true,
        validate: validator.isEmail
    },
    password:{
        type:String,
        required:[true, 'Password is Require'],
        
    },
    

}, {timestamps: true}
);


module.exports = mongoose.model('user', userSchema);