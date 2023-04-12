const mongoose = require('mongoose')


const empschema = new mongoose.Schema(
    {
        empname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            dropDups:true
            
        },
        age:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        }
    }
)

const Employemodel = mongoose.model('Employee',empschema)
module.exports = Employemodel