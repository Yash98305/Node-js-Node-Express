const http=require("http");
const { writeHeapSnapshot } = require("v8");
const server=http.createServer((req,res) => {
if(req.url == "/"){
    res.end("its your home page");
}
else if(req.url == "/about"){
    res.end("its your about page");
}
else if(req.url == "/contact"){
    res.end("its your contact page");
}
else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end('<h3>404 error page not found</h3>');
}
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000");
});