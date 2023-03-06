const os=require('os');
console.log(os.arch());  // output = x64

const freeMemory=os.freemem();
console.log(freeMemory); // output = 638996480 bytes
console.log(`${freeMemory/1024/1024/1024}`); // output = 0.4533843994140625 0gb memory is free


const totalMemory=os.totalmem();
console.log(totalMemory); // output = 7887228928 bytes
console.log(`${totalMemory/1024/1024/1024}`); // output = 7.345554351806641 7gb tota memory

console.log(os.hostname());

console.log(os.platform()); 

console.log(os.tmpdir());

console.log(os.type());