import Booking from "../models/booking.js";
import { isCustomerValid } from "./userControllers.js";

export function createBooking(req, res) {
    // Check if the customer is valid
    if (!isCustomerValid(req)) {
        res.status(403).json({ message: "Forbidden" });
        return;
    }

    const startingId = 1200;

    // Count current bookings and calculate the new booking ID
    Booking.countDocuments({})
        .then((count) => {
            const newId = startingId + count + 1;
            const newBooking = new Booking({
                bookingId: newId,
                roomId: req.body.roomId,
                email: req.user.email,
                start: req.body.start,
                end: req.body.end
            });

            // Save the new booking
            return newBooking.save();
        })
        .then((result) => {
            res.json({
                message: "Booking created successfully",
                result: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Booking creation failed",
                error: err
            });
        }
    ).catch(
        (err) => {
        res.status(500).json({
            message: "Booking creation failed",
            error: err
            });
           }
        )
    }
