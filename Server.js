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
const path = require("path");
const url = require('url');
const fs = require('fs');
const express   =   require('express');
const app = express();
app.use(express.static('public'));

const hostname = "localhost";
const port = 3000;
const server =http.createServer((req, res)=>{
    var q = url.parse(req.url,true);
    var filename ="." + q.pathname;
    if(filename =='./'){
      filename ='index.html';
    }
    else{}
    fs.readFile(filename,function(err,data){  
        if (err){
            console.log(req.headers);
            res.statusCode = 404;
            res.setHeader ('Content-Type','text/html');
            return res.end("404 not found");
        }else{
console.log(req.headers);
res.statusCode = 200;
res.setHeader ('Content-Type','text/html');
res.write(data);
// var q = url.parse(req.url,true).query;
// var date = q.year + '' +q.month;

res.end();
        }
    })
});
server.listen(port, hostname,()=>{
console.log(`Server running at http://${hostname}:${port}`);
});
}
module.exports.serce=sercerhttp;