const express = require('express');
const app = express();
const http = require('http');
const webServer = http.createServer(app);












// Add index.html for root page...
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

// added a listen port for run server address
const port = 8080;
webServer.listen(port, function(){
    console.log('Server address is: localhost:'+port);
})
