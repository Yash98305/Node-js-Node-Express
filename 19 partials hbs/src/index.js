const express=require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const staticpath= path.join(__dirname, '../public');
const templatespath = path.join(__dirname, '../templets/views');
const partialspath = path.join(__dirname, '../templets/partials');

app.set('view engine',"hbs");
app.set("views",templatespath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath));
app.get('/', (req, res) => {
    res.render("home");
});
app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/about/*', (req, res) => {
    res.render("404",{
        error:"Sorry page not found after about page"
    });
});

app.get('*', (req, res) => {
    res.render("404",{
        error:"Sorry page not found"
    });
});

app.listen(8000,()=>{
console.log("Listening on port 8000 ...")
});