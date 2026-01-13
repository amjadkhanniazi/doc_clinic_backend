import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


const doctorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    licence_number: {
        type: String,
        required: true,
        unique: true
    },
    is_active: {
        type: Boolean,
        default: true
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

doctorSchema.pre('save', async function(){
    if(!this.isModified('password')){
       return;
    }
    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
    
// Method to compare password
doctorSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
// create token
doctorSchema.methods.getToken = function(){
    return jwt.sign({id: this._id, email: this.email}, process.env.SECRET_KEY, {expiresIn: '8h'});
}

export default mongoose.model('Doctor', doctorSchema);