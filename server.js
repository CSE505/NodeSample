//import express module
var express = require("express");

//import fs module
var fs = require("fs");

//create rest object
var app = express();

//Deploy the node fs example in node server.
app.use(express.static(__dirname+"/../../NodeSample"));

//create rest API
app.get("/products",(req,res)=>{
    fs.readFile("../static/sample.json",(err,data)=>{
        res.send(result);
    });
});

//assigning port no.:3000
app.listen(3000);
console.log("server listening the port no.: 3000");