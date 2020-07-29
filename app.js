const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('working');
    //res.status(200).json({message: 'Working', serviceActive: true});
})

app.get('/top5movies',(req, res)=>{
    let movies = [
        "The Godfather",
        "Magic in the Moonlight",
        "Midnight in paris",
        "Two pope",
        "Life of pi"
    ]
    res.status(200).json({data: movies, serviceActive: true});
})

module.exports =  app;