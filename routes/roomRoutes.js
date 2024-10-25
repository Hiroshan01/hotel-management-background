import express from "express";
import { createRoom, deleteRoom, findRoomById, getRoom, getRoomByCaregory, updateRoom } from "../controllers/roomControll.js";

const roomRouter = express.Router();

roomRouter.post("/", createRoom)
roomRouter.delete("/:roomId", deleteRoom)
roomRouter.get("/", getRoom)
roomRouter.get("/by-category/:category", getRoomByCaregory)
roomRouter.get("/:roomId", findRoomById)
roomRouter.put("/:roomId", updateRoom)

export default roomRouter

