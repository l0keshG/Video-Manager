var express = require('express');
var mongoose = require('mongoose');
var vimeo = require('vimeo').Vimeo;
// var client = new vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express(); 

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/userDtls')

//checking for the connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to db');
});

mongoose.connection.on('error', (err)=>{
    
    if(err){
        console.log('erroring while connecting to db : ' + err);
    }
});

const port = 3000;
const route = require('./route');
app.use('/home',route);

//routing get
// app.get('/',(req,res) =>{
//     res.send('tester');
// });

// adding middleware
app.use(cors());

//static files
app.use(express.static(path.join(__dirname,'public')));

//adding body-parser
app.use(bodyparser.json());
app.listen(port, () =>{
    console.log("Server is at port:"+port);
});


