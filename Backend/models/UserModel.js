import mongoose from "mongoose";
const { Schema } = mongoose;

// Create the User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
      },
}, { timestamps: true });



const UserModel = mongoose.model('User', UserSchema);

export default UserModel;