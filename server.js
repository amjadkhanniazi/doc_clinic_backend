import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config.js';
import authRoutes from './routes/auth_route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

connectDB();
app.use(cors({
  origin: "*",
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);


export default app;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
