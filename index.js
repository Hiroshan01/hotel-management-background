import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/uersRousts.js' // Ensure the correct file name
import mongoose from 'mongoose';
import galleryItemRouter from './routes/galleryItemCreate.js';
import jwt, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv'
import CategoryRouter from './routes/categoryRouts.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRouts.js';

dotenv.config()

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json()); // Body parser middleware

// MongoDB connection string
const connectionString = process.env.MOMGO_URL

// Authentication middleware
app.use((req,res,next)=>{

  const token = req.header("Authorization")?.replace("Bearer ", "")

  if(token != null){
    jwt.verify(token, process.env.JWK_KEY, (err, decoded) => {
      if (decoded != null) {
          req.user = decoded;
          next();
      } else {
          next(); 
      }
    }
  )
  }else{
    next()
  }

});

// Connect to MongoDB
mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to the Database.");
    })
    .catch((error) => {
        console.error("Connection Failed:", error.message); // Improved error handling
    });

// Routes
app.use("/api/users", userRoutes);
app.use("/api/gallery", galleryItemRouter);
app.use("/api/category",CategoryRouter);
app.use("/api/room",roomRouter);
app.use("/api/booking",bookingRouter);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
