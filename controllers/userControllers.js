import User from "../models/user.js";
import jwt from 'jsonwebtoken';

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
                error: error.message  // Include error message for debugging
            });
        });
}

// Authentication part
export function loginUser(req, res) {
    const credential = req.body;

    User.findOne({ email: credential.email, password: credential.password })
        .then((user) => {
            if (user == null) {
                return res.status(404).json({
                    message: "User not found"
                });
            } else {
                // Generate JWT token
                const token = jwt.sign(
                    { _id: user._id, email: user.email },  // Include only necessary fields
                    'secret',  // Secret should be stored in an environment variable
                    { expiresIn: '1h' }  // Set token expiration time
                );

                // Send response with token and user data
                return res.json({
                    message: "User Found",
                    user: user,
                    token: token  // Send the token back to the client
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Authentication failed",
                error: error.message
            });
        });
}
