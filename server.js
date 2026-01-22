import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

import connectDB from './config/db.js';

import authRoutes from './routes/auth_route.js';
import doctorsRoutes from './routes/doctors_route.js';
import patientRoutes from './routes/patient_route.js';
import bookingsRoutes from './routes/bookings_route.js';
import medical_record from './routes/medical_record.js';

/* -------------------- EXPRESS APP -------------------- */
const app = express();

/* -------------------- RATE LIMIT (SERVERLESS SAFE) -------------------- */
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,      // 1 minute
  max: 50,                // tune as needed
  standardHeaders: true,
  legacyHeaders: false,
});

/* -------------------- MIDDLEWARES -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalLimiter);

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

/* -------------------- ROOT ROUTE -------------------- */
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend API is running',
  });
});

/* -------------------- API ROUTES -------------------- */
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/medical_records', medical_record);

/* -------------------- 404 HANDLER -------------------- */
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

/* -------------------- VERCEL SERVERLESS HANDLER -------------------- */
export default async function handler(req, res) {
  try {
    // Skip DB connection for non-API routes
    if (!req.url.startsWith('/api')) {
      return app(req, res);
    }

    await connectDB();          // cached connection
    return app(req, res);       // IMPORTANT: return
  } catch (error) {
    console.error('❌ Handler error:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}

/* -------------------- LOCAL DEVELOPMENT -------------------- */

// ⚠️ Uncomment ONLY for local testing (NOT for Vercel)
// ----------------------------------------------------
// const PORT = process.env.PORT || 5000;

// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ DB connection failed:', err);
//     process.exit(1);
//   });