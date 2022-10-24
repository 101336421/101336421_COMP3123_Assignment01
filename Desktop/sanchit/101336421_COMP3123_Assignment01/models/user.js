const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        primaryKey:true,
        max:100,
    },
    password:{
        type:String,
        require:true,
        unique:true,
        max:50,
    },
    email:{
        type:String,
        trim: true,
        require:true,
        unique: true,
        max: 50,
    }
});

module.exports = mongoose.model('user',userSchema);
