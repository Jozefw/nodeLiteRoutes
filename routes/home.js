const express = require('express');

const route = express.Router();
const path = require('path');
const root = require('../util/path')

route.get('/',(req,res,next)=>{
    // res.send('<h1>Home route</h1>')
    res.sendFile(path.join(root,'views','home.html'))
})

module.exports = route;