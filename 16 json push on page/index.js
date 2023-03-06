const express = require('express');
const app = express();

//multiple h1 tag send on page lode very quickly
app.get('/', (req, res) => {
    res.write("<h1> this is home page </h1>");
    res.write("<h1> welcome to home page </h1>");
    res.send();
});

//---------------------------------------------------

//send object file
app.get('/json', (req, res) => {
    res.send({
        name: "yash",
        age: 19,
        gender: "male"

    });
});

//---------------------------------------------------

//array of objects
app.get('/arrayobject', (req, res) => {
    res.send([{
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    }]);
});

//---------------------------------------------------

//send array of object using json
app.get('/jsonobj', (req, res) => {
    res.json([{
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    },
    {
        name: "yash",
        age: 19,
        gender: "male"

    }]);
});

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})