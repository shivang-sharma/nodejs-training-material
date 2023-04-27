const events = require('events');
const eventEmitter = new events.EventEmitter();

/**
 * Example 1
 */
// function listenerOne() {
//     console.log('First Listener Executed');
// }
 
// function listenerTwo() {
//     console.log('Second Listener Executed');
// }
 
// eventEmitter.on('listenerOne', listenerTwo); // Register for listenerOne
// eventEmitter.on('listenerOne', listenerOne); // Register for listenerOne
 
// // When the event "listenerOne" is emitted, both the above callbacks should be invoked.
// eventEmitter.emit('listenerOne');

/**
 * Example2
 */

 function listenerOnce() {
    console.log('listenerOnce fired once');
 }
 function listener() {
    console.log('listener fired once');
 }
 eventEmitter.on('listenerOne', listener);
 eventEmitter.once('listenerOne', listenerOnce);
 eventEmitter.emit('listenerOne');// 
 eventEmitter.emit('listenerOne'); //