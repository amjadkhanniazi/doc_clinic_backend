import express from 'express';
import bookings from '../models/bookings.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

// Create a new Booking (protected route, only for authenticated users)
router.post('/new', authenticateToken, async (req, res)=>{
    const {patient_id, appointment_date, appointment_time, duration_minutes, status, reason_for_visit, notes} = req.body;
    try{
        const newBooking = new bookings({
            patient_id,
            doctor_id: req.user.id,
            appointment_date,
            appointment_time,
            duration_minutes,
            status,
            reason_for_visit,
            notes
        });
        const savedBooking =  await newBooking.save();
        res.status(201).json(savedBooking);
    }catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});    
    }
});

// Get all Bookings for a specific Doctor (protected route)
router.get('/doctor/:doctorId', authenticateToken, async (req, res)=>{
    try{
        const doctorBookings = await bookings.find({doctor_id: req.params.doctorId});
        res.status(200).json(doctorBookings);
    }catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// update Booking status (protected route)
router.patch('/update/:bookingId', authenticateToken, async (req, res)=>{
    const {status, notes} = req.body;
    try{
        const updatedBooking = await bookings.findByIdAndUpdate(
            req.params.bookingId,
            {status, notes, updated_at: Date.now()},
            {new: true}
        );
        if(!updatedBooking){
            return res.status(404).json({message: 'Booking not found'});
        }
        res.status(200).json(updatedBooking);
    }catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// Delete a Booking (protected route)
router.delete('/delete/:bookingId', authenticateToken, async (req, res)=>{
    try{
        const deletedBooking = await bookings.findByIdAndDelete(req.params.bookingId);
        if(!deletedBooking){
            return res.status(404).json({message: 'Booking not found'});
        }
        res.status(200).json({message: 'Booking deleted successfully'});
    }catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});
export default router;