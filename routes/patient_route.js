import express from 'express';
import patients from '../models/patients.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

// protected routes

// add a new patient (protected route)
router.post('/addpatient', authenticateToken, async (req, res)=>{
    const { first_name, last_name, date_of_birth, gender, phone, email, address, city, state, zip_code, emergency_contact_name, emergency_contact_phone, blood_group, allergies } = req.body;
    try{
        const newPatient = new patients({
            first_name,
            last_name,
            date_of_birth,
            gender,
            phone,
            email,
            address,
            city,
            state,
            zip_code,
            emergency_contact_name,
            emergency_contact_phone,
            blood_group,
            allergies
        });
        await newPatient.save();
        res.status(201).json({ message: 'Patient added successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

// get all patients (protected route)
router.get('/allpatients', authenticateToken, async (req, res)=>{
    try{
        const allpatients = await patients.find({});
        res.json(allpatients);
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// get a patient profile (protected route)
router.get('/profile/:id', authenticateToken, async (req, res)=>{
    try{
        const patient = await patients.findById(req.params.id).select('-password');
        if(!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// update patient profile (protected route)
router.put('/updateprofile/:id', authenticateToken, async (req, res)=>{
    const { first_name, last_name, age, gender, phone, email, address } = req.body;
    try{
        await patients.findByIdAndUpdate(req.params.id, {
            first_name,
            last_name,
            age,
            gender,
            phone,
            email,
            address,
            updated_at: Date.now()
        });
        res.json({ message: 'Profile updated successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// delete a patient (protected route)
router.delete('/delete/:id', authenticateToken, async (req, res)=>{
    try{
        await patients.findByIdAndDelete(req.params.id);
        res.json({ message: 'Patient deleted successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;