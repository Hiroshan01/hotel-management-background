import Room from "../models/room.js";
import {isAdminValid} from "../controllers/userControllers.js"


export function createRoom(req,res){
      
    // const adminValid=isAdminValid(req)
  if(!isAdminValid){
    res.status(403).json({
      message: "Unauthorized"
    });
    return
  }
    const newRoom = new Room(req.body);

  newRoom.save().then(
    (result) => {
      res.json({
        message: "Rooms created Successfully",
        result:result
      });
    }
  ).catch(
    (err) => {
      res.status(500).json({
        message: "Rooms creation failed",
        error: err
      });
    }
  );
}
  //delete rooms
  
  export function deleteRooms(req, res) {
   
    if(!isAdminValid){
        res.status(403).json({
          message: "Unauthorized"
        });
        return
      }
  
const roomId=req.params.roomId
Catogory.findOneAndDelete({roomId:roomId}).then(
  ()=>{
    res.json(
      {
        message : "Room deleted successfully"
      }
      
    )
  }

).catch(
  ()=>{
    res.json(
      {
        message:"Room deletion faild"
      }
    )
  }
)
}
//Update 
export function findRoomById(req,res){
  const roomId=req.params.roomId
  Room.findOne({roomId:roomId}).then(
    (result)=>{
      if(result ==null){
        res.status(404).json({
          message:"Rooms not found"
        })
        return
      }else{
        res.status(404).json({
          message:"Rooms not found",
          result:result
        })

      }
    }
         
  ).catch(
    res.json({
      message:"Room search failed",
      error:err
    })
  )
}
export function getRoom(req,res){
  Room.find().then(
    (result)=>{
      res.json({
        rooms:result
      })
    }
  ).catch(
    res.json({
      message:"Failed to get rooms",
      
    })
  )
}
export function updateRoom(req,res){

  // const adminValid=isAdminValid(req)
   if(!isAdminValid){
     res.status(403).json({
       message: "Unauthorized"
     });
     return
   }
   const roomId=req.params.roomId;
 
   Category.findOneAndUpdate({roomId:roomId},req.body).then(
     ()=>{
       res.json({
         message:"Room updated sucessfully"
       })
     }
   ).catch(
     ()=>{
       res.json({
         message:"Failed to upate Room"
       })
     }
   )
 }
 //find category

 export function getRoomByCaregory(req,res){
      const category=req.params.category

      Room.find({category:category}).then(
        (result)=>{
          res.json(
            {
              rooms:result
            }
          )
        }
      ).catch(
        ()=>{
         res.json(
          {
            message:"Failed to get name"
          }
         ) 
        }
      )


 }
