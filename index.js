import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/uersRoots.js';

const app = express();

app.use(bodyParser.json()) //bodypaerser
app.use("/routes", userRoutes)


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
