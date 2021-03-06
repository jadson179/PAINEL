const express = require('express');
const http = require('http')
const path = require('path');
const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/view', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.listen(8080,()=>{
  console.log("http://0.0.0.0:8080")
  console.log('Owner: https://github.com/jadson179')
});