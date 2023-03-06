const path = require('path');
const express = require('express');
const app = express();

    app.use(express.static(path.join(__dirname, '../public')));

    // app.get('/', (req, res) => {
    //     res.send("it is home");
    // });

app.listen(8000,()=>{
    console.log("listening on port 8000");
});