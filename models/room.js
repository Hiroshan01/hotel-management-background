import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
   
    roomId: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    maxGuests: {
        type:Number,
        required:true,
        default:3,
       
    },
    available:{
        type:Boolean,
        required:true,
        default:true
    },
    photo:{
        type:String
    },
    specialDescription:{
        type:String,
        default:""
    },
    note:{
       type:String,
       default:""
    }
   
});

// Save location collection name "Rooms is database name simple capital not problem"
const Room = mongoose.model("Rooms", roomSchema);

export default Room;