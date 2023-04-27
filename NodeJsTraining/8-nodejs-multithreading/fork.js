//parent.js
const cp = require('child_process');
const n = cp.fork(`${__dirname}/program.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

n.send({ hello: 'world' });


// const spawn = require('child_process').spawn;
// const child = spawn('my-command', {detached: true});

// process.kill(-child.pid);