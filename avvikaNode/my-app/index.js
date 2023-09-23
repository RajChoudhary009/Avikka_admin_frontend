const express = require('express');
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser')

var cors = require('cors')

const {testDbConnection} = require('./servises/connection/database')
const app = express();

const registration = require('./servises/routes/registration');
const carousel = require('./servises/routes/carousel');
const products = require('./servises/routes/products');

testDbConnection()

let PORT = process.env.PORT || 8000;

// Parse JSON-encoded bodies
 app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/uploads',express.static("uploads"));

// Routes
app.use('/', registration); 
app.use('/', carousel);
app.use('/', products);

app.get('/hello', (req, res)=>{
  res.send({'message': 'hello user i am here'})
})

// app listen
app.listen(PORT, ()=> {
  console.log(`Server started at https//localhost:${PORT}...`)
}) ;

