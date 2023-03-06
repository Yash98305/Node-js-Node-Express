const fs = require("fs");
// fs.writeFileSync("read.txt","welcome to my code");
// fs.writeFileSync("read.txt","welcome to my code i am yash");
// fs.appendFileSync("read.txt","welcome to my code");
// const data=fs.readFileSync("read.txt");
// console.log(data.toString());
fs.renameSync("read.txt","write.txt");