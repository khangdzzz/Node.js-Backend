const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet())
// app.use(compression())


// init database

// init routes

app.use('/', (req, res) => {
    const name = "khangdz"
    res.send({
        message: 'Hello, World!',
        metadata: name.repeat(100000)
    });
});


module.exports = app
