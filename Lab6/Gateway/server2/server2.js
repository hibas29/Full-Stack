const express = require('express');
const app = express();
const PORT= 4002;

app.get('/getTeacher', (req, res) => {
    res.json({teachers : [{name: 'Mahadev', age: 29}, {name: 'Sonali', age: 28}], from: 'server2'});
});

app.listen(PORT, () => {   
        console.log(`Server 2 is running on http://localhost:${PORT}`);
 
});