import mongoose from "mongoose";

const catogorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    features:[
        {
            type:String,
        }
    ],
    description:{
        type:Number,
        required:true
    },
    image:{
        type:String
    }
})