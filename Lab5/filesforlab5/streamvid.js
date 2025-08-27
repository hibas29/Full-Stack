//streaming
const express = require("express");
var fs = require('fs');

const app = express();

app.listen (3000,()=>{
    console.log("listening on port 3000");
});
app.get ("/",(req,res)=>{
    const filepath = "sample.mp4"; 
    const filesize = fs.statSync(filepath).size;
    const header ={
        'content-length': filesize,
        'content-type':'video/mp4'
    }

    res.writeHead(200,header);

    const stream =fs.createReadStream(filepath);

    stream.pipe (res);

    stream.on ("data",(data)=>{
        console.log("data reading");
    })
})