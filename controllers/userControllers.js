import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config()

// User registration
export function postUsers(req, res) {
    const user = req.body;
    const password = req.body.password;

    // Hash the password
    const passwordHash = bcrypt.hashSync(password, 10);
    user.password = passwordHash;

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
                error: error.message
            });
        });
}

// User login
export function loginUser(req, res) {
    const credential = req.body;

    // Find user by email
    User.findOne({ email: credential.email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            // Compare password with stored hash
            const isPasswordValid = bcrypt.compareSync(credential.password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({
                    message: "Invalid password"
                });
            }

            // Generate JWT token
            const token = jwt.sign(
                { _id: user._id, 
                email: user.email, 
                type: user.type },// Include user type in token payload
                process.env.JWK_KEY,  // Secret key for signing the token
                { expiresIn: '1h' }
            );
            

            // Send response with token and user data
            return res.json({
                message: "Login successful",
                user: user,
                token: token  // Send the token back to the client
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Authentication failed",
                error: error.message
            });
        });
}
export function isAdminValid(req){
    if (req.user == null) {
    
      return false
    }
  
    if (req.user.type != "admin") {
     
      return true
    }
    return false
  }

  //Boocking can be put only log users
export function isCustomerValid(req){
    if(req.user ==null){
        return false
    }
    if (req.user.type !="customer"){
        return false
    }
    return true;
}
export function getUser(req,res){
    const user=req.body.user;
    if(user==null){
        res.json({
            message:"User Not found"
        })
    }else{
        res.json({
            message:"Found",
            user:user
        })
    }
   
}