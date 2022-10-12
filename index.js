import Express from "express";
// import dotenv from "./.env";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = Express();
dotenv.config();

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
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});
    


app.listen(8000, () =>
{
    connect();
    console.log("server is running on port 8000");
    });
