/**
 * URL Module in Node.js
 */
 const url = require('url');
 const adr = 'http://localhost:8080/default.htm?year=2022&month=september';
 const q = url.parse(adr, true);
//  console.log(q);
 console.log("HOST : ", q.host);
 console.log("PATH NAME : ", q.pathname);
 console.log("SEARCH : ", q.search);
 const qdata = q.query;
 console.log("QUERY DATA : ", qdata.month);