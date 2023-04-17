const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


const bodyParser = require('body-parser');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/', require('./src/routes/authentication.routes'));
app.use('/api', require('./src/routes/user.routes'));

module.exports = app;
