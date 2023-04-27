const fs = require("fs");
let data = "";

// Create a readable stream
const readerStream = fs.createReadStream("sample.txt");

// Set the encoding to be utf8.
readerStream.setEncoding("UTF8");

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
  console.log("Recieved");
  data += chunk;
});

readerStream.on("end", function () {
  // console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});