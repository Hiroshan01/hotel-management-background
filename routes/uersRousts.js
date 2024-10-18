import express from 'express';
import { loginUser, postUsers } from '../controllers/userControllers.js'; // Ensure this path is correct

const userRoutes = express.Router();

// Route to create a new user
userRoutes.post("/", postUsers);

// Route to log in a user
userRoutes.post("/login", loginUser);

export default userRoutes;
