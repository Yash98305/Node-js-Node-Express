const express = require('express');
const app=express();
const path = require('path');

 app.set('view engine','hbs');

app.set('views',path.join(__dirname,'../templates'));
app.get('/',(req,res)=>{
    res.render("index.hbs");
});

app.get('/about',(req,res)=>{
    res.render("jj");
});

app.listen(8000,()=>{
    console.log("Listening on port 8000...");
})