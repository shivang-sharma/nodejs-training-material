const fs = require('fs');
const server = require('http').createServer();

// server.on('request', (req, res) => {
//   fs.readFile('./file.txt', (err, data) => {
//     if (err) throw err;
  
//     res.end(data);
//   });
// });

/**
 * The HTTP response object (res in the code above) is also a writable stream.
 * This means if we have a readable stream that represents the content of 
 * file.txt, we can just pipe those two on each other and achieve mostly the 
 * same result without consuming too much of memory.
 */

server.on('request', (req, res) => {
    const src = fs.createReadStream('./file.txt');
    src.pipe(res);
});  

server.listen(8000);