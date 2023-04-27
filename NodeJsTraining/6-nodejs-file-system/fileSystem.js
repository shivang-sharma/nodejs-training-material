const fs = require('fs');

/**
 * Create Files
 * The File System module has methods for creating new files:
 * fs.appendFile()
 * fs.open()
 * fs.writeFile()
 */

/**
 * The fs.appendFile() method appends specified content to a file. 
 * If the file does not exist, the file will be created:
 */
// fs.appendFile('doesNotExistSample.txt', 'Hello content!', function (err) {
//     if (err) throw err; 
//     console.log('Saved!');
// });
// console.log("Append");
// fs.appendFileSync('doesNotExistSample.txt', 'Hello content!');
// console.log("Append");


/**
 * The fs.open() method takes a "flag" as the second argument, 
 * if the flag is "w" for "writing", the specified file is opened for writing.
 * If the file does not exist, an empty file is created:
 */
// ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).
// fs.open('Sample2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     fs.writeFile(file, "YaY Learned File I/O", function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Saved!');
//             fs.close(file);
//         }
//     });
// });
// fs.open('sample.txt', 'r', function (err, file) {
//     if (err) throw err;
//     fs.read(file, function (err, bytesRead, buffer) {
//         if (err) {
//             console.log(err)
//         }
//         console.log(bytesRead);
//         console.log(buffer.toString());
//         fs.close(file);
//     })
// });
/**
 * Update Files
 * The File System module has methods for updating files:
 * fs.appendFile()
 * fs.writeFile()
 */

/**
 * The fs.writeFile() method replaces the specified file and content if it exists.
 * If the file does not exist, a new file, containing the specified content, 
 * will be created:
 */

// fs.writeFile('mynewfile.txt', 'YaY Learned File I/O', function (err) {
//    if (err) throw err;
//    console.log('Saved!');
// });

// var fileData;
// fs.readFile('sample.txt', 'ascii', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         fileData = data
//     }
// });
// console.log(fileData);
// undefined

// var fileData = fs.readFileSync('sample.txt', 'ascii');
// console.log(fileData);
/**
 * Delete Files
 * To delete a file with the File System module,
 * use the fs.unlink() method.
 */
//  fs.unlink('mynewfile.txt', function (err) {
//    if (err) throw err;
//    console.log('File deleted!');
//  });


/**
 * Rename Files
 * To rename a file with the File System module,
 * use the fs.rename() method.
 */
// fs.rename('sample.txt', 'Sample1.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });


// var data = fs.readFileSync('Sample1.txt', 'ascii');
// console.log(data);
