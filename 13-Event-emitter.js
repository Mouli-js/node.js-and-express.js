// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

const EventEmitter = require('events'); 

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age)=>{
    console.log(`data received ${name} and of age: ${age}`)
})

customEmitter.on('response', ()=>{
    console.log(`Some other event`)
})

customEmitter.emit('response', 'Mouli', 24)