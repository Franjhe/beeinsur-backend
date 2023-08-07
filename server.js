require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./_middleware/error-handler');
const config = require('./config.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/proyect', require('./proyect/proyect.controller'));
app.use('/news', require('./news/news.controller'));
app.use('/messaje', require('./messaje/messaje.controller'));
app.use('/gallery', require('./gallery/gallery.controller'));
app.use('/auth', require('./auth/auth.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = config.database.env === 'production' ? (config.database.port || 80) : 5250;
app.listen(port, () => console.log('Server listening on port ' + port));