// setImmediate(() => console.log('I run immediately'));
// process.nextTick(() => console.log('But I run before that'));

/**
 * If process.nextTick() is called in a given phase, all the callbacks passed to
 * process.nextTick() will be resolved before the event loop continues. 
 * This will block the event loop and create I/O Starvation if process.nextTick() 
 * is called recursively.
 */
// let count = 0
// function increaseCount() {
//      console.log(`Processing nextTick increaseCount ${++count}`)
//      if (count < 120) {
//         process.nextTick(increaseCount);
//      }
// }
// setImmediate(() => console.log('setImmediate is called'))
// setTimeout(() => console.log('setTimeout executed'), 5)
// process.nextTick(increaseCount)
// console.log('Start')
// console.log('Start ...')
// console.log('Start .....')

/**
 * Recursive calls to process.nextTick() are processed continuously
 * and I/O is starved. So setImmediate() and setTimeout() callbacks won't be executed.
 */

 let count = 0
 function increaseCount() {
     console.log(`Processing setImmediate cb ${++count}`)
     if (count < 20) {
        setImmediate(increaseCount)
     }
 }
 setImmediate(increaseCount)
 setTimeout(() => console.log('setTimeout executed'), 5)
 console.log('Start')

/**
 * Even though setImmediate() is called recursively, it won't block the event loop 
 * and the setTimeout() callback is executed after the specified timeout.
 */

/**
 * It is recommended to use setImmediate() in all cases because it’s easier to reason about.
 * 
 * Non-IO loops: Execution order process.nextTick() > setTimeout() > setImmediate() and other
 * timers in non IO loops.
 * 
 * IO loops: Execution order process.nextTick() > setImmediate() > setTimeout() and other 
 * timers in non IO loops 
 * 
 * setTimeout: It isn’t reliable always
 */