import express from 'express';
import {loginUser, postUsers}  from '../controllers/userControllers.js';

const userRoutes = express.Router();



userRoutes.post("/",postUsers)
userRoutes.post("/login",loginUser)






export default userRoutes