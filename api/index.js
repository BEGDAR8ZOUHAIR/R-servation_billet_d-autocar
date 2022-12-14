import Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// var cors = require('cors')
import authRoutes from "./routes/auth.js"; 
import usersRoutes from "./routes/users.js"; 
import tripRoutes from "./routes/trip.js"; 
import bussRoutes from "./routes/buss.js";
// set up express app 
const app = Express();
dotenv.config();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })  );
const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
    } catch (err)
    {
       throw err;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

app.use(cookieParser());
//middleware
app.use("/api/auth", authRoutes);
app.use("/api/trip", tripRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/buss", bussRoutes);

app.use((err,req, res,next) =>
{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        message: errorMessage,
        stack : err.stack,
   }); 
});

const port = process.env.PORT || 8000;
// listen for the server
app.listen(port, () =>
{
    connect();
    console.log("server is running on port http://localhost:"+port);
});
