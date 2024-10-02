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
    },
    profilePicture:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
}, {timestamps: true});

// creating User model
// 'User' is the name of the model being created
const User = mongoose.model('User', userSchema);       // here userSchema is being registered in the db
                                        // so now you have a User class and you can use it 
export default User;
