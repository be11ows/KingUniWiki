const express = require('express');
const mongoose = require('mongoose');
const exphbs  = require('express-handlebars');
const port = 3000;
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

require('dotenv').config();

mongoose.connect('mongodb+srv://dbUser:dbPassword@cluster0.jf3os.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected');
});

app.listen(port, console.log(`listening on port ===> http://localhost:${port}! Now its up to you...`));