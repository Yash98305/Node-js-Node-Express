const eventclass = require("events");
const event = new eventclass();

event.on("saymyname",()=>{
    console.log("its yash");
});
event.on("saymyname",()=>{
    console.log("its vansh");
});
event.on("saymyname",()=>{
    console.log("its jyant");
});

event.emit("saymyname");


event.on("clickPage", (sc,msg)=>{
    console.log(`source code is ${sc} and the page is ${msg}`);
});

event.emit("clickPage",200,"ok");