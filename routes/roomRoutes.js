import express from 'express';
import {createRoom,deleteRooms,findRoomById,getRoom,updateRoom} from '../controllers/roomControll.js'

const roomRouter=express.Router()

roomRouter.post("/",createRoom)

roomRouter.delete("/roomId",deleteRooms)

roomRouter.post("/",getRoom)

roomRouter.put("/roomId",findRoomById)

roomRouter.get("/roomId",updateRoom)

export default roomRouter;