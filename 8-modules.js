// Modules - Encapsulated code (only share minimum)
// commonJS - every file is a module by default

const {mouli, bharran} = require('./4-Names');
const sayHi = require('./5-genric')
const person1 = require('./6-alternative export')

 /*sayHi(mouli);
 sayHi(bharran);
 sayHi("Mouli");
 */
 
 require(`./7-without exporting`)

 // built in modules

const os = require('os');

//info about the current user
const user = os.userInfo();
console.log(user);

// method returns the system's uptime in seconds
console.log(`The systems uptime is ${os.uptime()} seconds`)
//console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
 
 console.log(currentOS);

