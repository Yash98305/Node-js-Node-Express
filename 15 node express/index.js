const express = require('express');
const app= express();

app.get('/', (req, res) => {
    res.status(200).send("its home page");
});
app.get('/about', (req, res) => {
    res.status(200).send("its about page");
});
app.get('/contact', (req, res) => {
    res.status(200).send("its contact page");
});
app.listen(8000,"127.0.0.1",() => {
    console.log("listening on port 8000");});