import Express from "express";
// import dotenv from "./.env";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// var cors = require('cors')
import authRoutes from "./routes/auth.js"; 
import usersRoutes from "./routes/users.js"; 
import busRoutes from "./routes/bus.js"; 
import tripRoutes from "./routes/trip.js"; 
const app = Express();
dotenv.config();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
} catch (error) {
  throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
//middleware
app.use("/api/auth", authRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/trip", tripRoutes);
app.use("/api/users", usersRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () =>
{
    connect();
    console.log("server is running on port http://localhost:"+port);
    });