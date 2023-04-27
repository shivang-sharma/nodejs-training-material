const event = require('events')
const eventEmitter = new event.EventEmitter();

// console.log("eventEmitter.eventNames() : ", eventEmitter.eventNames());
// console.log("eventEmitter.getMaxListeners() : ", eventEmitter.getMaxListeners());
// console.log("eventEmitter.listenerCount() : ", eventEmitter.listenerCount())
// console.log("eventEmitter.listeners() : ", eventEmitter.listeners());
// console.log("eventEmitter.setMaxListeners(15) : ", eventEmitter.setMaxListeners(15));
// console.log("eventEmitter.getMaxListeners() : ", eventEmitter.getMaxListeners());

function handler1() {
    console.log("event1 Handler1");
}
eventEmitter.addListener('event1', handler1 );

eventEmitter.addListener('event1', function () {
    console.log("event1 Handler2");
});
eventEmitter.addListener('event2', function () {
    console.log("event2 Handler1");
});
console.log("=================================================================");
console.log("eventEmitter.eventNames() : ", eventEmitter.eventNames());
console.log("eventEmitter.listenerCount('event1') : ", eventEmitter.listenerCount('event1'));
console.log("eventEmitter.listenerCount('event2') : ", eventEmitter.listenerCount('event2'));
console.log("eventEmitter.listeners('event1') : ", eventEmitter.listeners('event1'));
console.log("eventEmitter.listeners('event2') : ", eventEmitter.listeners('event2'));

eventEmitter.emit('event1');
eventEmitter.emit('event2');
eventEmitter.emit('event1');
eventEmitter.emit('event2');

eventEmitter.once('event2', () => {
    console.log("event2 Handler2Once");
});
eventEmitter.prependOnceListener('event1', function() {
    console.log("event1 Handler3Once Prepend");
});
eventEmitter.prependListener('event2', function() {
    console.log("event2 Handler3 Prepend");
});
console.log("=================================================================");
console.log("eventEmitter.eventNames() : ", eventEmitter.eventNames());
console.log("eventEmitter.listenerCount('event1') : ", eventEmitter.listenerCount('event1'));
console.log("eventEmitter.listenerCount('event2') : ", eventEmitter.listenerCount('event2'));
console.log("eventEmitter.listeners('event1') : ", eventEmitter.listeners('event1'));
console.log("eventEmitter.listeners('event2') : ", eventEmitter.listeners('event2'));
console.log("eventEmitter.rawListeners('event1') : ", eventEmitter.rawListeners('event1'));

eventEmitter.emit('event1');
eventEmitter.emit('event2');
eventEmitter.emit('event1');
eventEmitter.emit('event2');

// // eventEmitter.addListener alias for  eventEmitter.on
// // eventEmitter.off alias for eventEmitter.removeListener

console.log("=================================================================");
console.log("eventEmitter.eventNames() : ", eventEmitter.eventNames());
console.log("eventEmitter.listenerCount('event1') : ", eventEmitter.listenerCount('event1'));
console.log("eventEmitter.listenerCount('event2') : ", eventEmitter.listenerCount('event2'));
console.log("eventEmitter.listeners('event1') : ", eventEmitter.listeners('event1'));
console.log("eventEmitter.listeners('event2') : ", eventEmitter.listeners('event2'));
console.log("eventEmitter.rawListeners('event1') : ", eventEmitter.rawListeners('event1'));

eventEmitter.removeListener('event1', handler1);
eventEmitter.removeAllListeners('event2');

console.log("=================================================================");
console.log("eventEmitter.eventNames() : ", eventEmitter.eventNames());
console.log("eventEmitter.listenerCount('event1') : ", eventEmitter.listenerCount('event1'));
console.log("eventEmitter.listenerCount('event2') : ", eventEmitter.listenerCount('event2'));
console.log("eventEmitter.listeners('event1') : ", eventEmitter.listeners('event1'));
console.log("eventEmitter.listeners('event2') : ", eventEmitter.listeners('event2'));
console.log("eventEmitter.rawListeners('event1') : ", eventEmitter.rawListeners('event1'));


eventEmitter.emit('event1');
eventEmitter.emit('event2');
eventEmitter.emit('event1');
eventEmitter.emit('event2');