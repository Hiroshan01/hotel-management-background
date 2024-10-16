import express from 'express';

const userRoutes=express.Routers()

userRoutes.get("/",(req,res)=>{
    req.json({
        message:"Hi Hiroshan Madusanka"
    })

})
userRoutes.post("/",(req,res)=>{
    const name=req.body.name
    const message=name;
    req.json({
        message:"Hi" + message
    })
})
userRoutes.detete("/",(req,res)=>{
    req.json({
        message:"Hi" + message
    })
})
userRoutes.put("/",(req,res)=>{
    req.json({
        message:"Hi" + message
    })
})
export default userRoutes