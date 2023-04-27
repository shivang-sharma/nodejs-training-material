/**
 * Callback Events with Parameters
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listener(code, msg) {
    console.log(`status ${code} and ${msg}`);
}

eventEmitter.on('status', listener);
eventEmitter.emit('status', 200, 'ok');