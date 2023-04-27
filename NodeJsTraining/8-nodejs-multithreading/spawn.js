const spawn = require('child_process').spawn;
const proc = spawn('node', ['--version']);
proc.stdout.setEncoding('ascii').on('data', (chunk) => {
    console.log(chunk);
});