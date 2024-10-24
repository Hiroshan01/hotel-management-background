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