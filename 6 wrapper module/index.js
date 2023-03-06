(function(exports,require,module,__filename,__dirname) { // it is local not global
const a=require("fs");
console.log("yash");
module.exports ={xyz};
});  //it is privite code

(function(){
    var a =" yash"
    console.log(a);
})();  // ()it run the code
// console.log(a); // it will throw error
