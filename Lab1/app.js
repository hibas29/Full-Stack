const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/student', (req, res)=> {
    res.json([
        "Hiba", "Ruby", "OK"
    ])
})
app.listen(3000, () => {
    console.log("Listening on 3000")
});