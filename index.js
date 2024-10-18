import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/uersRousts.js';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json()) //bodypaerser middlware

//routes
app.use("/api/users", userRoutes)

const connectionString="mongodb+srv://tester:123@project.rm6md.mongodb.net/?retryWrites=true&w=majority&appName=project"

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the DataBase.")
    }
).catch(
    ()=>{
        console.log("Connection Failed.")
    }
)




app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
