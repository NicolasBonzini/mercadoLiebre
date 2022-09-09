const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();


const publicPath = path.resolve(__dirname, './public');

app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.listen(PORT, () => {
    console.log('http://localhost:3030/');
})