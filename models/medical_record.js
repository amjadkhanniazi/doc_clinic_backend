import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    medication_name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true },
    duration: { type: String, required: true },
    instructions: { type: String },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true }
}, { _id: false }); // prevents extra _id per prescription


const medicalRecordSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },   
    diagnosis: {
        type: String,
        required: true
    },
    treatment_plan: {
        type: String,
        required: true
    },
    prescriptions: [prescriptionSchema],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('MedicalRecord', medicalRecordSchema);