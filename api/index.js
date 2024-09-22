// creating server 
// A server is a system (either hardware or software) that provides resources, data, services,
//  or programs to other computers, known as clients, over a network. In the context of web
//  development, a server typically handles HTTP requests from clients (like web browsers)
//  and serves back the requested content (like web pages or APIs).

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB');    
})
.catch((err) => {
    console.log(err);
});


const app = express();

app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
    
});