const {readFile, writeFile} = require('fs');
console.log('start')
readFile('./Content/First.txt', 'utf8', (err, result)=>{
if(err) {
    console.log(err);
    err
}
const first = result;
readFile('./Content/Second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result;
    writeFile('./Content/result-async.txt', `Here is the push ${first} ${second}`, (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('done with this task');
    })
})
})
console.log('starting the next task')