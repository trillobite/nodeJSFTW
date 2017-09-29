
/*
    Example of using classes in ES6.
*/

class Person {
    constructor() {
        this.type = 'human';
        this.name = undefined;
        this.age = undefined;
        this.height = undefined;
        this.weight = undefined;
    }
}

class Student extends Person {
    constructor() {
        this.type = 'student';
        this.studentID = undefined;
    }
}

class greet {
    constructor() {
        this.greetMsg = 'Hello';
    }
    sendGreeting(data) {
        console.log(`${this.greetMsg}: ${data}`);
    }
}

