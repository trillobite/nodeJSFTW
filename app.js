//allow access to the emitter
var Emitter = require('events');

//set a new emitter object.
var emtr = new Emitter();

//create an event.
emtr.on('greet', function () {
    //what to run when a greet has happened.
    console.log('somewhere, someone said hello');
});

//set another function to execute on the event.
emtr.on('greet', function () {
    console.log('A greeting occured!');
});

console.log('hello');
//manually execute the event when something has happened.
emtr.emit('greet');