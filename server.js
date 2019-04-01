// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//const connectionString = 'mongodb://127.0.0.1:27017/webdev';
const connectionString = 'mongodb://username:password@ds351455.mlab.com:51455/heroku_rpqz8zsb'
const  client = mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist -- For building -- REMOVE
//app.use(express.static(path.join(__dirname, 'dist/web-maker')));
app.use(express.static(path.join(__dirname, 'dist/web-maker')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));



/*var dbServer = require('./test-mongodb/app');
dbServer(app);*/

//require('./test-mongodb/app')(app);


// For Build: Catch all other routes and return the index file -- BUILDING

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// const express = require('express');
// const app = express();
//app.set('process.env.PORT||3200',port);

//************************************* Feb.28 2019
// app.get("/api/hello", function(req,res){
// //   res.send("Hello World!")
// // });
// //
// // app.get("/api/hellofunction",helloFun);
// // function helloFun(req,res){
// //   res.send("response message");
// // }
// require('./test')(app);

//require('./server/app')(app);
require("./server/app")(app);
