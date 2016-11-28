//index.js is where we:
//0. use as backend
//1. set up the server
//2.


//1-1. set up the server
// need to install (terminal, using npm install --save moduleNAme) and require node modules and express in this current js file
var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(9176, function () {
  console.log('Example app listening on port 3000!')
})
