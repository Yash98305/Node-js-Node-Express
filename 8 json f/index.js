const mydata={
    name : "yash",
    age : 19,
    college : "gla"
};
console.log(mydata);

//convert object to json
const mydatajson=JSON.stringify(mydata);
console.log(mydatajson);

//convert json to object
const mydataobj=JSON.parse(mydatajson);
console.log(mydataobj);

// task :
//        objejt to json -> put in file -> read file -> again convert json to object then at last print it

const fs= require("fs");
const data=JSON.stringify(mydata);
console.log(fs.writeFileSync("jsonfile.json",data));

const dataobj=fs.readFileSync("jsonfile.json");
console.log(dataobj.toString());
const obj=JSON.parse(dataobj);
console.log(obj);
