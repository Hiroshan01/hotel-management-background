import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    password: {
        type: String,
        required: true
    }
});

// Save location collection name "Users is database name simple capital not problem"
const User = mongoose.model("Users", userSchema);

export function getUsers(req, res) {
    res.json({
        message: "This is a GET request"
    });
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
