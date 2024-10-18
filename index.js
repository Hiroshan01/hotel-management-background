import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/uersRousts.js';

const app = express();

app.use(bodyParser.json()) //bodypaerser middlware

//routes
app.use("/api/users", userRoutes)


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
