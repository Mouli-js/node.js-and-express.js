//path
const { log } = require('console');
const path = require('path');
//console.log(path.sep)

const filePath = path.join('/content', 'Sub-folder', 'text.txt')
//console.log(filePath);

const baseName = path.basename(filePath)
//console.log(baseName);

const resolvePath = path.resolve(__dirname, 'content', 'Sub-folder', 'text.txt')
console.log(resolvePath);
