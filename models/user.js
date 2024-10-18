import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required:true,
        default:"customer"
       
    },
    whatsapp:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    disable:{
        type:Boolean,
        equired:true,
        default:false
    },
    emailVerified:{
        type:Boolean,
        equired:true,
        default:false
    }
   
});

// Save location collection name "Users is database name simple capital not problem"
const User = mongoose.model("Users", userSchema);

export default User;