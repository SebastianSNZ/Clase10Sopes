const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.send("<h1>Hola mundo :D</h1>");
});

app.listen(process.env.port || 8080);
