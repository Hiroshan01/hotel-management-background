import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/uersRousts.js' // Ensure the correct file name
import mongoose from 'mongoose';
import galleryItemRouter from './routes/galleryItemCreate.js';
import jwt from 'jsonwebtoken';

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json()); // Body parser middleware

// MongoDB connection string
const connectionString = "mongodb+srv://tester:123@project.rm6md.mongodb.net/?retryWrites=true&w=majority&appName=project";

// Authentication middleware
app.use((req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ", "")
  
    if(token != null){
      jwt.verify(token,"secret",
        (err,decoded)=>{
        if(decoded != null){
          req.user = decoded
          next()
        }else{
          next()
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

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
