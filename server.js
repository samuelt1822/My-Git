const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

 const passport = require('passport');
 const cookieParser = require('cookie-parser');
 const session = require('express-session');


 app.use(session({
  secret: 'secret test',
  resave: true,
  saveUninitialized: true
}));

 app.use(session({ secret: process.env.SESSION_SECRET }));

 app.use(cookieParser());
 app.use(passport.initialize());
 app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));
//app.use(express.static('public'));

// CORS
app.use(function(req, res, next) {
    //CORS are here, not sure why I get CORS error on Heroku
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  /**res.header("Access-Control-Allow-Credentials", "true");*/
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

//Database requirements
var connectionString = 'mongodb://127.0.0.1:27017/webdev';
/** To use database var connectionString = process.env.MONGODB_URI;*/
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const client = mongoose.connect(connectionString, {useNewURLParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


require('./assignment/app')(app);

