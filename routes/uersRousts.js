import express from 'express';
import { deleteUsers, getUsers, postUsers, putUsers }  from '../controllers/controllers.js';

const userRoutes = express.Router();

userRoutes.get("/",getUsers)

userRoutes.post("/",postUsers)

userRoutes.put("/",putUsers)

userRoutes.delete("/",deleteUsers)


export default userRoutes