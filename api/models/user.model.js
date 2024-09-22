import mongoose from "mongoose";

// creating userSchema 
const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true});

// creating User model
const User = mongoose.model('User', userSchema);

export default User;
