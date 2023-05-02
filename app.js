const path = require('path');
const express = require('express');
const app = express();
const route = require('./routes/home')
const routeUser = require('./routes/users');
const root = require('./util/path');

app.use(express.static(path.join(__dirname,'public')))

app.use(route);
app.use(routeUser);



app.listen(3000,()=>{
    console.log('listening on port 3000')
})