const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes.js');
require('dotenv').config();


const app = express();

// Cors Middleware
app.use(cors());

// Connect to MongoDB
mongoose
    .connect(process.env.URI)
    .then(() =>
        //Listening Port 4000
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        }))
    .catch(err => console.log(err));


// Bodyparser Middleware
app.use(express.json());


// Routes
app.use('/api', router);