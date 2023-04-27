const exec = require('child_process').exec;
// exec('for i in $( ls -LR ); do echo item: $i; done', (e, stdout, stderr)=> {
//     if (e instanceof Error) {
//         console.error(e);
//         throw e;
//     }
//     console.log('stdout ', stdout);
//     console.log('stderr ', stderr);
// });

// exec('netstat -aon | grep tcp', (e, stdout, stderr)=> {
//     if (e instanceof Error) {
//         console.error(e);
//         throw e;
//     }
//     console.log('stdout ', stdout);
//     console.log('stderr ', stderr);
// });