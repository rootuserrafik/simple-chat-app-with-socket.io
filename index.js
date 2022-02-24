const express = require('express');
const app = express();
const http = require('http');
const webServer = http.createServer(app);




app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

// added a listen port for run server address
const port = 8080;
webServer.listen(port, function(){
    console.log('Server port is: '+port);
})
