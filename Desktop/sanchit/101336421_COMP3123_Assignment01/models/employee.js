const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true,
        unique:true,
        max:100,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        max:25,
    },
    gender:{
        type:String,
        enum:['Male','Female','Other'],
        max:25,
    },

    salary:{
        type:Number,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
        max:100,
    }

});

module.exports = mongoose.model('employee',employeeSchema);