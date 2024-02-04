const mongoose = require('mongoose');
const express = require('express');

const personnelRoute = require('./routes/personnelRoute');
const app = express();
//Connect to DB
mongoose.connect('mongodb://localhost:27017/workplace').then(() => console.log('DB Connected Successfully'))

//-----------------------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//-----------------------------------------------


//Routes
app.get('/', (req, res) => {
    res.send('Work Place API Home PAGE');
})

app.use('/personnels', personnelRoute);



const port = 3000;
app.listen(port,()=> console.log(`Server listening on port ${port}`));
