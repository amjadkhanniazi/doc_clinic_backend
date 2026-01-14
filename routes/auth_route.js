import express from 'express';
import doctors from '../models/doctors.js';

const router = express.Router();

// Public Routes
router.post('/register', async (req, res) => {
    const { first_name, last_name, specialization, phone, email, password, licence_number} = req.body;
    try {
        console.log("try block in register route started");
        const newDoctor = new doctors({ first_name, last_name, specialization, phone, email, password, licence_number });
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor registered successfully' });
    }
    catch (error) {
        console.log("catch block in register route started");
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// user Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await doctors.findOne({ email});
        if(!newUser) return res.status(404).json({message: 'Doctor not found'});

        const isMatch = await newUser.comparePassword(password);
        if(!isMatch) return res.status(400).json({message: 'Invalid Credentials'});
        const token = newUser.getToken();
        res.json({ token });
    }
    catch (error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})
export default router;