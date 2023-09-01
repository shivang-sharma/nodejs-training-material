const cluster = require('cluster');
const express = require('express');
const path = require('path');

const port = 3000;
const root = path.dirname(__dirname);
const cCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master started on pid ${process.pid}`)
    // Create a worker for each CPU
    for (let i = 0; i < cCPUs; i++) {
        cluster.fork();
    }
    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online.');
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died.');
    });
} else {
    const app = express();
    app.get('/test', (req, res, next)=>{
        res.json(process.pid);
    });
    app.listen(port);
}