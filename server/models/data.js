const mongoose=require('mongoose')

const DataSchema=new mongoose.Schema({

    itemname:{
        type:String,
        unique:true,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    picture:{
        type:String,
        default:""
    }


})

module.exports=mongoose.model('Data',DataSchema);