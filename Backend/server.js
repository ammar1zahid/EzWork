import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { connect } from './config/db.js';
import Routers from './Routes.js';
import corsOptions from './config/cors.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//MiddlewaresWS


app.use(cors(corsOptions));// Applying CORS middleware to the app
app.use(cookieParser()); // for storing in cookies
app.use(express.json());

// Routes
app.use("/api",Routers);



//error handlers
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });

// Connect to MongoDB
connect();

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});