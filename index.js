//index.js is where we:

//1. set up the server
// need to install (terminal, using npm install --save moduleNAme) and require node modules and express in this current js file
var express = require('express');
var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// }) --> commented out as app.use in line20 will do the job

app.listen(9176, function () {
  console.log('Example app listening on port 3000!')
})

//2. introduce static file, including html, css
var path = require('path');
//serve the entire front-end folder
app.use('/', express.static(path.join(__dirname, 'frontend')))

//3. define multiple routes --> use a separate route file
app.get('/search',function(res,req){})
app.post('')

//4. connecting front and back:
// on click, send a request to back end at endpoint /search;

//5. on the backend, once a request is rec'd, send an api request to insapi
//6. once response is rec'd from