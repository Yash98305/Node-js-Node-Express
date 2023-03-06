const http = require('http');
const fs = require('fs');

const data=fs.readFileSync(`${__dirname}/data.json`, 'utf8');
const dataobj=JSON.parse(data);
 
const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("wel to home");
}
else if(req.url=="/about"){
    res.end("wel to about");
}
else if(req.url=="/contact"){
    res.end("wel to contact");
}
else if(req.url=="/userapi"){
    res.writeHead(200, {"content-Type": "application/json" });
    res.end(data);
}
else{
    res.writeHead(404,{"content-type": "text/html"});
    res.end("<h1> 404 Error page not found !! </h1>");
}
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server listening on port 8000 ...");
});