import express from 'express';

const userRoutes = express.Router();

userRoutes.get("/",(req,res)=>{
    res.json({
        message:"This is get request"
    })

})
userRoutes.post("/",(req,res)=>{
    
    res.json({
        message:"This is post request"
    })
    
})
userRoutes.delete("/",(req,res)=>{
    res.json({
        message:"This is delete request"
    })
})
userRoutes.put("/",(req,res)=>{
    res.json({
        message:"This is put request"
    })
})
export default userRoutes