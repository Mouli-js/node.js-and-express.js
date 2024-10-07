// const fs = require('fs');

const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./Content/First.txt', 'utf-8');
const second = readFileSync('./Content/Second.txt', 'utf-8')


writeFileSync('./Content/result-sync.txt', 
    `Hello World ${first} ${second}`, 
    {flag: 'a'})

    console.log('done with the task')
    console.log('starting the next task')


    /* Alternative approach for the above
    const {readFile, writeFile} = require('fs');

readFile('./Content/First.txt', 'utf8', (err, result)=>{
if(err) {
    console.log(err);
    err
}
console.log(result);
})
*/