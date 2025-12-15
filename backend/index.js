import express from 'express';
import { PORT } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookmodel.js';
import router from './routes/BookRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

// Configure CORS before routes
app.use(cors({
    origin : 'http://localhost:5173',
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders : ['Content-Type']
}));

app.get('/' , (req , res)=> {
    console.log('Hello world route accessed');
   return res.status(200).send('hello world');
});

app.use('/books' , router);


mongoose.connect('mongodb://localhost:27017/bookstore')
        .then(() =>{
            console.log('Connected to MongoDB');
            app.listen(PORT , () =>{
            console.log(`Server is running on port ${PORT}`);
        })
        })
        .catch((error) =>{
            console.error('Error connecting to MongoDB' , error);
        });