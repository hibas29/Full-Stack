const express = require('express');
const userQuery = require('./query/userQuery');

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    const users= await userQuery.getAllUsers();
    res.send(users);
});

app.post("/createUser", async (req, res) => {
    const newUser = await userQuery.createUser(req.body);
    res.status(201).send(newUser);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


const dbconnect  = require('./dbconfig');
const Users = require('./models/users');
//const app = express();
app.use = express();

(async()=>{
    try {
        await dbconnect.authenticate(); //connects to db
        console.log("successful.");
        await dbconnect.sync(); //create or update all the tables
        console.log("Synced");
    }
    catch (error) {
        console.error("Error:", error);
    }
    finally {
        await dbconnect.close();
    }
})();