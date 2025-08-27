const fs = require("fs"); // fs file system
//math library
const math = require("./math.js");
//math dependency
const _=require("lodash");

const express = require("express");


const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
    const { name } = req.query;
    console.log(name);
    res.send("index.html");

});
app.get("/user details", (req, res) => {
    res.json({
        "name": "Hiba",
        "role": "Student"
    })

});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});


//create a file in the system
fs.writeFileSync("data.txt","Hello World");

//Appends
fs.appendFileSync("data.txt","Hello World2");

//reads the file 
const data = fs.readFileSync("data.txt","utf-8");



console.log(data);

console.log(math.add(12,33));

console.log(math.sub(33,21));

console.log(math.multiply(12,33));

console.log(math.divide(2,4));

console.log(math.modulo(18,8));

console.log(_.add(21,"21"));

const  array=[2,1,2,6,9,7,90,80];
console.log(_.sortBy(array));



