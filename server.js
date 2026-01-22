import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth_route.js';
import connectDB from './config/db.js';
import doctorsRoutes from './routes/doctors_route.js';
import patientRoutes from './routes/patient_route.js';
import bookingsRoutes from './routes/bookings_route.js';
import medical_record from './routes/medical_record.js';

const app = express();
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,      // 1 minute
  max: 300,                 // allow 300 requests per IP per minute (tune this)
  message: "Too many requests, please try again later.",
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalLimiter);
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/medical_records', medical_record);

/**
 * Vercel serverless handler
 * This ensures DB connection is established before handling requests
 */
export default async function handler(req, res) {
  await connectDB(); // Cached connection ensures warm/cold starts work
  app(req, res);
}


// const PORT = process.env.PORT || 5000;
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
//   });
// });
