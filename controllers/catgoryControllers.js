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
  