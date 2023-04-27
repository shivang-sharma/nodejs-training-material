const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'authentication_demo'
});

connection.connect((err)=>{
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});
// connection.end(function(err) {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log("The connection is terminated now");
// });

module.exports = connection;