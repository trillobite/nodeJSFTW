/*
    Example of an emitter, so that functions can be called
    when actions are taken throughout the project.

    Emitter created from an example from the Udemy course
    "Understand NodeJS." All comments written by Jesse Parnell.
*/


/*
            EXAMPLE OF CODE FOR APP.JS
    
    //allow access to the emitter
    var Emitter = require('./emitterExample.js');

    //set a new emitter object.
    var emtr = new Emitter();

    //create an event.
    emtr.on('greet', function() {
        //what to run when a greet has happened.
        console.log('somewhere, someone said hello');
    });

    //set another function to execute on the event.
    emtr.on('greet', function() {
        console.log('A greeting occured!');
    });

    console.log('hello');
    //manually execute the event when something has happened.
    emtr.emit('greet');
*/

//create an emitter object.
function Emitter() {
    this.events = {}; //this is where the events will be stored.
};

//add to prototype, so that whenever a new emitter is created, it
//will contain these functions.
Emitter.prototype.on = function(type, listener) {
    //if the property exists, do nothing, if not, make it an array.
    this.events[type] = this.events[type] || [];
    //add a listener function to the array, to be executed later.
    this.events[type].push(listener);
};

//emit actually executes the listener function.
Emitter.prototype.emit = function(type) {
    //if the event exists
    if(this.events[type]) {
        //execute all of the functions for this event.
        this.events[type].forEach(function(listener) {
            listener(); //invoke the listener function.
        });
    }
}

//export the emitter so it can be used.
module.exports = Emitter;