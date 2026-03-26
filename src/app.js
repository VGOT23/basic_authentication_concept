const express = require('express');
const app = express();
const authroute = require('./routes/auth.route')
const postroute = require('./routes/post.route')
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authroute)
app.use('/api/create',postroute)




module.exports = app;