const mongoose= require("mongoose");

const parentSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    CIN:{
        type:Number,
        required:true,
    },
    Phone:{
        type:Number,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:false,
    },
    Adress:{
        type:String,
        required:true,
    }
})

const ParentModel = mongoose.model("Parent",parentSchema)

module.exports = ParentModel ;