const express = require('express');
const app = express();
const PORT = 4001;

app.get('/getstudent', (req, res) => {
    res.json({student : [{name: 'Amaan', age: 20}, {name: 'Hiba', age: 19}], from: 'server1'});
});
              
app.listen(PORT, () => {
    console.log(`Server 1 is running on http://localhost:${PORT}`);
});