const express = require('express');

const route = express.Router();
const path = require('path');
const root = require('../util/path')

route.get('/users',(req,res,next)=>{
    res.sendFile(path.join(root,'views','users.html'))
})

module.exports = route;