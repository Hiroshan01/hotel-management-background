import Booking from "../models/booking";

export function createBooking(req,res){
    var startingId=1200;

    Booking.coutDocument({}).then(
        (count)=>{
            const newId=startingId+count;
        }
    )
}