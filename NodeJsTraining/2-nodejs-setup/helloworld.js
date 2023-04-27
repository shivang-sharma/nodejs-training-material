const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// HTTP Methods
// HTTP Status Codes
// HTTP Headers
// HTTP Content Type
const server = http.createServer((req, res) => {
  if (req.url == "/api/users" && req.method == "POST") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end("{'users': ['user1', 'user2']}");
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});