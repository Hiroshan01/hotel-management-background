import User from "../models/user.js";

export function getUsers(req, res) {
   User.find().then(
    (userList)=>{
      res.json({
        list:userList
      })
    }
   )
}

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

export function putUsers(req, res) {
    res.json({
        message: "This is a PUT request"
    });
}

export function deleteUsers(req, res) {
    res.json({
        message: "This is a DELETE request"
    });
}
