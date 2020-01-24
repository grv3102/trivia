var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Headers', 'PUT, POST, GET');
        return res.status(200).json({});
    }
    next();
});

//Import Routes
var data =  require('../trivserv/routes/data');

//DB Connectivity
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
    console.log('Connect to DB');
});


//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//Routes Middleware
app.use('/triserv', data);



app.listen(3000, ()=>console.log('Server is listening to the Port 3000'));