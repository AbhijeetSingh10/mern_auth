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
// 'User' is the name of the model being created
const User = mongoose.model('User', userSchema);       // here userSchema is being registered in the db
                                        // so now you have a User class and you can use it 
export default User;
