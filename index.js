const express = require('express');
const app = express();
const http = require('http');
const webServer = http.createServer(app);


// import socket.io server for configer
const {Server} = require('socket.io');
let io =  new Server(webServer);









// Add index.html for root page...
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

// Check socket connection is connected or not
io.on('connection', function(socket){
    console.log('New user is connected...')
})

// added a listen port for run server address
const port = 8080;
webServer.listen(port, function(){
    console.log('Server address is: localhost:'+port);
})
