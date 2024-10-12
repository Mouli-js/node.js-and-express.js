/* PROMISE
const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, data)=>{
            if(err){
        reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

getText('./Content/First.txt').then(result => console.log((result))).catch((err)=> console.log(err))

*/

const {readFile, writeFile} = require('fs').promises;

/*const util = require('util')
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

*/

const start = async()=> {
   try{
    const first = await readFile('./Content/First.txt', 'utf8')
    const second = await readFile('./Content/Second.txt', 'utf8')
    await writeFile('./Content/result-mind-grenade.txt', `This is Awesome : ${first} ${second}`)
    console.log(first, second);
   }
   catch (error){
    console.log(error)
   }
}

start()

/* const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, data)=>{
            if(err){
        reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
    */

// getText('./Content/First.txt').then(result => console.log((result))).catch((err)=> console.log(err))