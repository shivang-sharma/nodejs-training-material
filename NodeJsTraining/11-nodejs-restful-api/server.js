const app = require('./app');
const http = require('http');

const port = 3000


// Create HTTP server.
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Listening on ${port}`)
});