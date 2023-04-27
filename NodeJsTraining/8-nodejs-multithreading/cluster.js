/**
 * Cluster Module
 */
 const cluster = require("cluster");

 if (cluster.isMaster) {
   console.log(`Master process is running...`);
   cluster.fork();
   cluster.fork();
   cluster.fork();
 } else {
   console.log(`Worker process started running`);
 }