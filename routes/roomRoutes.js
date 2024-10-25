import express from 'express';
import {createRoom,deleteRooms,findRoomById,getRoom,updateRoom,getRoomByCaregory} from '../controllers/roomControll.js'

const roomRouter=express.Router()

roomRouter.post("/",createRoom)

roomRouter.delete("/roomId",deleteRooms)

roomRouter.get("/",getRoom)

roomRouter.get("/by-category/:category", getRoomByCaregory)


roomRouter.put("/roomId",findRoomById)

roomRouter.get("/roomId",updateRoom)

export default roomRouter;