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
                { _id: user._id, email: user.email },  // Include only necessary fields
                process.env.JWK_KEY,  // Secret should be stored in an environment variable
                { expiresIn: '1h' }  // Set token expiration time
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
