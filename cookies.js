'use strict'

const express      = require('express')
const cookieParser = require('cookie-parser')
 
const app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {

    if(req.cookies.name == undefined){
        console.log('Cookies: ', req.cookies);

        res.cookie("name", "NAME");

        res.end();
    }else{
        console.log("else");
    }
})
 
app.listen(8080)
