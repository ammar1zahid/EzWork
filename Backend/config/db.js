//import mongoose from 'mongoose';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error("MongoURI is not defined in the environment variables");
}

// MongoDB connection function
export const connect = async () => {
    try {
        await mongoose.connect(mongoURI);

        console.log("Database connected");
    } catch (err) {
        // Ensuring err is typed properly
        if (err ) {
            console.error("Error in connection:", err.message);
        } 
    }
};

// Listen for MongoDB connection status
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});