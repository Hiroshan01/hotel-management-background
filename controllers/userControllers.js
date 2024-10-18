import User from "../models/user.js";



export function postUsers(req, res) {
    const user = req.body;

    // Insert data to DB
    const newUser = new User(user);
    newUser.save()
        .then(() => {
            res.json({
                message: "User created successfully."
            });
        })
        .catch((error) => {
            res.json({
                message: "User creation failed.",
                
            });
        });
}
//Authentication part
export function loginUser(req,res){
    const credential=req.body
    User.findOne({email:credential.email, password:credential.password}).then(
        (user)=>{
          if(user==null){
            res.stutus(404).json({
               message:"User not found"
            })
          }else(
            res.json({
                message:"User Found",
                user:user
            })
          )
        }
    )
}

