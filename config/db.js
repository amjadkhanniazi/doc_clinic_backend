// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let cached = global.mongoose; // Check for existing global cache

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    // Use existing cached connection if available
    return cached.conn;
  }

  if (!cached.promise) {
    // Create new connection promise if it doesn't exist
    cached.promise = mongoose.connect(process.env.MONGO_URL).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log("Database connected successfully");
    return cached.conn;
  } catch (error) {
    cached.promise = null; // Reset promise so it can retry next time
    console.error("Database connection failed:", error);
    throw error;
  }
}

export default connectDB;
