import express from 'express';
import MedicalRecord from '../models/medical_record.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

// Create a new Medical Record (protected route, only for authenticated users)
router.post('/new', authenticateToken, async (req, res) => {
    try {
        const {
            patient_id,
            booking_id,
            diagnosis,
            treatment_plan,
            prescriptions
        } = req.body;

        const newMedicalRecord = new MedicalRecord({
            patient_id,
            doctor_id: req.user.id, // from JWT
            booking_id,
            diagnosis,
            treatment_plan,
            prescriptions
        });
        await newMedicalRecord.save();
        res.status(201).json(newMedicalRecord);

    } catch (error) {
        res.status(400).json({
            message: 'Failed to create medical record',
            error: error.message
        });
    }
});

// Get all Medical Records for a specific Patient (protected route)
router.get('/patient/:patientId', authenticateToken, async (req, res)=> {
    try {
        const patientMedicalRecords = await MedicalRecord.find({patient_id: req.params.patientId});
        res.status(200).json(patientMedicalRecords);
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// Delete a Medical Record (protected route)
router.delete('/delete/:recordId', authenticateToken, async (req, res) => {
    try {
        const deletedRecord = await MedicalRecord.findByIdAndDelete(req.params.recordId);
        if (!deletedRecord) {
            return res.status(404).json({message: 'Medical Record not found'});
        }
        res.status(200).json({message: 'Medical Record deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// Update a Medical Record (protected route)
router.patch('/update/:recordId', authenticateToken, async (req, res) => {
    const {diagnosis, treatment_plan, prescriptions} = req.body;
    try {
        const updatedRecord = await MedicalRecord.findByIdAndUpdate(
            req.params.recordId,
            { diagnosis, treatment_plan, prescriptions },    
            { new: true }
        );
        if (!updatedRecord) {
            return res.status(404).json({message: 'Medical Record not found'});
        }
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// Get a specific Medical Record by ID (protected route)
router.get('/:recordId', authenticateToken, async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findById(req.params.recordId);
        if (!medicalRecord) {
            return res.status(404).json({message: 'Medical Record not found'});
        }
        res.status(200).json(medicalRecord);
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

// delete a prescription from a medical record (protected route)
router.delete('/:recordId/prescription/:prescriptionIndex', authenticateToken, async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findById(req.params.recordId);
        if (!medicalRecord) {
            return res.status(404).json({message: 'Medical Record not found'});
        }
        medicalRecord.prescriptions.splice(req.params.prescriptionIndex, 1);
        await medicalRecord.save();
        res.status(200).json({message: 'Prescription deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
});

export default router;