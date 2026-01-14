import express from 'express';
import cors from 'cors';
// import connectDB from './config/db.js';
import 'dotenv/config.js';
import authRoutes from './routes/auth_route.js';
import mongoose from 'mongoose';


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors({
  origin: "*",
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);


export default app;
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
