import mongoose from "mongoose";

const bookingSchema=new mongoose({

    bookingId:{
        type:Number,
        required:true,
        unique:true
    },
    roomId:{
        type:Number,
        required:true,

    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
    reason:{
        type:String,
        required:true,
        default:" "
    },
    start:{
        type:Date,
        required:true,
    },
    end :{
        type:Date,
        required:true,
    },
    note:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})
 const Booking=mongoose.model("Booking",bookingSchema)
 export default Booking;