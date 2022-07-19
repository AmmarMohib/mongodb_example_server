const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
const routes = require('./routes');


connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(routes);

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}
const PORT = process.env.PORT || 11122;

app.listen(PORT, console.log(`Server running on port ${PORT}`));