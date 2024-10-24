import Category from "../models/catogory.js";
import Catogory from "../models/catogory.js";

export function createCatogory(req, res) {
   

    if (req.user == null) {
      res.status(403).json({
        message: "Unauthorized"
      });
      return;
    }
  
    if (req.user.type != "admin") {
      res.status(403).json({
        message: "Forbidden"
      });
      return;
    }
  
    const newCatogory = new Catogory(req.body);
    newCatogory.save().then(
      (result) => {
        res.json({
          message: "Category Item created Successfully",
          result:result
        });
      }
    ).catch(
      (err) => {
        res.status(500).json({
          message: "Category Item creation failed",
          error: err
        });
      }
    );
  }
  //delete cat
  
  export function deleteCatogory(req, res) {
   

    if (req.user == null) {
      res.status(403).json({
        message: "Unauthorized"
      });
      return;
    }
  
    if (req.user.type != "admin") {
      res.status(403).json({
        message: "Forbidden"
      });
      return
    }
const name=req.params.name
Catogory.findOneAndDelete({name:name}).then(
  ()=>{
    res.json(
      {
        message : "Category deleted successfully"
      }
      
    )
  }

).catch(
  ()=>{
    res.json(
      {
        message:"Category deletion faild"
      }
    )
  }
)
  
   
  }
  export function getCategory(req,res){
    Catogory.find().then(
      (result)=>{
        res.json({
          Category:result
        }
          
        )
      }
    ).catch(
      ()=>{
        res.json(
          {
            message:"Failed to get category"
          }
        )
      }
    ).catch((err) => {
      console.error(err); // Log the error
      res.status(500).json({
          message: "Failed to get category",
          error: err.message // Optionally include the error message
      });
  });
  }
  export function getCategoryByName(req,res){
    const name=req.params.name
    Category.findOne({name:name}).then(
      (result)=>{
        if(result==null){
          res.json(
            {
              message:"Category not found"
            }
          )
        }else{
          res.json(
            {
              category:result
            }
          )
        }
      }
    ).catch(
      ()=>{
        res.json(
          {
           message:"failed to get catgory"
          }
          
        )
      }
    )
  }
export function updateCategory(req,res){

 // const adminValid=isAdminValid(req)
  if(!isAdminValid){
    res.status(403).json({
      message: "Unauthorized"
    });
    return
  }
  const name=req.params.name;

  Category.updateOne({name:name},req.body).then(
    ()=>{
      res.json({
        message:"Category updated sucessfully"
      })
    }
  ).catch(
    ()=>{
      res.json({
        message:"Failed to upate category"
      })
    }
  )
}


function isAdminValid(req){
  if (req.user == null) {
  
    return false
  }

  if (req.user.type != "admin") {
   
    return true
  }
  return false
}

