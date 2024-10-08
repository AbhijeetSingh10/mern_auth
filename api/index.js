// creating server 
// A server is a system (either hardware or software) that provides resources, data, services,
//  or programs to other computers, known as clients, over a network. In the context of web
//  development, a server typically handles HTTP requests from clients (like web browsers)
//  and serves back the requested content (like web pages or APIs).

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB');    
})
.catch((err) => {
    console.log(err);
});

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());    // this will allow json as the input of our backend

app.use(cookieParser());

app.listen(3000, ()=> {
    console.log("Server listening on port 3000");   
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});