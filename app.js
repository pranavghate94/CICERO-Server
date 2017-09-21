const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');

//Setting up an Express application
const app = express();

//Logging the requests to the console
app.use(logger('dev'));

//Helpful is parsing data from incoming requests
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : false
}));

//Add the Routes
require('./server/routes')(app);

//Default Route
app.get('*', (req, res)=>{
    res.status(200).send({
        message : 'Welcome to the CICERO API'
    })
});

module.exports = app;