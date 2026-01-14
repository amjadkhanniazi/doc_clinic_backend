import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth_route.js';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import doctorsRoutes from './routes/doctors_route.js';

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors({
  origin: "*",
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorsRoutes);

//export default app;
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});