// var express   =   require('express');
// var bodyPaser =  require('body-parser');
// var cors      =  require('cors');

// var app      =   express();
// app.use(bodyPaser.json());
// app.use(bodyPaser.urlencoded({extended:false}));
// app.use(cors());
// app.listen(8000);
// console.log('Server start at on port 8000');

function sercerhttp(){
    const http =require('http');
    const hostname = "localhost";
    const port = 3000;
    const server =http.createServer((req, res)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader ('Content-Type','text/html');
    var fs = require('index.html');
    res.end('<html> <body> <h1> Server Sucess:) </h1> </body> </html>');
    
    });
    server.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
    });
    }
    module.exports.serce=sercerhttp;