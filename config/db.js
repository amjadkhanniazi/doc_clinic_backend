import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    const client = mongoose.connect(config.mongoURL);
    try{
        await client;
        console.log("Database connected successfully");
    }
    catch(error){
        console.error("Database connection failed:", error);
    }
}

export default connectDB;