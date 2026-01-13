import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip_code:{
        type: String,
        required: true
    },
    emergency_contact_name:{
        type: String,
        required: true
    },
    emergency_contact_phone:{
        type: String,
        required: true
    },
    blood_type:{
        type: String
    },
    allergies:{
        type: [String]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Patient', patientSchema);