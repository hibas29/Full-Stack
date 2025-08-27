console.log("Hello World!");

const http = require("http");

//create http server
const server = http.createServer((req, res)=>{
    res.end ('Hello World from Node.js');
});

server.listen(3000, ()=>{
console.log('Server is running at https://localhost:3000');
});
