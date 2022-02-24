const express = require('express');
const app = express();
const http = require('http');
const webServer = http.createServer(app);







// Add a 
const port = 8080;
webServer.listen(port, function(){
    console.log('Server port is: '+port);
})
