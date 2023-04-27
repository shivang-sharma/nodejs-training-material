const { rejects } = require("assert");
const fs = require("fs");
const data = "File writing to a stream example\n";

// fs.open('file.txt', 'w', function (err, file) {
//     if (err) throw err;
//     for (var i=0; i<4000000; i++) {
//       fs.writeFile(file, data, function (err) {
//           if (err) {
//               console.log(err);
//           }
//       });
//     }
// });


// // Create a writable stream
const writerStream = fs.createWriteStream("file.txt");
  
// // //   // Handle stream events --> finish, and error
writerStream.on("finish", function () {
    console.log("Write completed.");
});
  
writerStream.on("error", function (err) {
  console.log(err.stack);
});
// // // Write the data to stream with encoding to be utf8
// for (var i=0; i<50000000; i++) {
//   writerStream.write(data, "UTF8")
// }
// writerStream.end();
/**
 * The out of memory error happens because you're not waiting for the drain 
 * event to be emitted, without waiting Node.js will buffer all written chunks
 * until maximum memory usage occurs.
 * .write will return false if the internal buffer is greater than highWaterMark
 *  which defaults to 16384 bytes (16kb). In above code we are not handling the 
 * return value of .write, and so the buffer is never flushed.
 * 50000000/16384 = 3052 times the buffer needs to be flushed.
 */
(async function () {
  for (var i=0; i<50000000; i++) {
    if (!writerStream.write(data, "UTF8")) {
      await new Promise((resolve, reject) => {
        writerStream.once('drain', resolve)
      });
    }
  }
})().then((data) => {
  writerStream.end();
})