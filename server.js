import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth_route.js';
import connectDB from './config/db.js';
import doctorsRoutes from './routes/doctors_route.js';
import patientRoutes from './routes/patient_route.js';
import bookingsRoutes from './routes/bookings_route.js';
import medical_record from './routes/medical_record.js';

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
app.use('/api/patients', patientRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/medical_records', medical_record);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});