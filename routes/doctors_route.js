import express from 'express';
import doctors from '../models/doctors.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

// public routes
router.get('/alldoctors', async (req, res)=>{
    try{
        const allDoctors = await doctors.find({});
        // return only id, first_name, last_name, specialization, email, licence_number
        const response = allDoctors.map(doc => ({
            id: doc._id,
            first_name: doc.first_name,
            last_name: doc.last_name,
            specialization: doc.specialization,
            email: doc.email,
            licence_number: doc.licence_number
        }));
        res.json(response);

    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// update doctor profile (protected route)
router.put('/updateprofile/:id', authenticateToken, async (req, res)=>{
    const { first_name, last_name, specialization, phone, email } = req.body;
    try{
        await doctors.findByIdAndUpdate(req.params.id, {
            first_name,
            last_name,
            specialization,
            phone,
            email,
            updated_at: Date.now()
        });
        res.json({ message: 'Profile updated successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// get doctor profile (protected route)
router.get('/profile/:id', authenticateToken, async (req, res)=>{
    try{
        const doctor = await doctors.findById(req.params.id).select('-password -__v');
        if(!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// delete a doctor (protected route)
router.delete('/delete/:id', authenticateToken, async (req, res)=>{
    try{
        await doctors.findByIdAndDelete(req.params.id);
        res.json({ message: 'Doctor deleted successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;