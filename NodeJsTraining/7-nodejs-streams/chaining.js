const fs = require("fs");
const zlib = require('zlib');

// Compress the file sample.txt to sample.txt.gz
fs.createReadStream('sample.txt') // read
   .pipe(zlib.createGzip()) // compressed
   .pipe(fs.createWriteStream('sample.txt.gz')); // written
  
console.log("File Compressed.");