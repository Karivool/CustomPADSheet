var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200 || process.env.API_PORT;
var cors = require('cors');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://karivool:password@ds155695.mlab.com:55695/custompad')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
var Character = require('./src/models/Char');
var charRouter = require('./src/routes/charRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/chars', charRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
