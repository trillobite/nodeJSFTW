
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
        super(); //without super, "this" will be undefined.
        this.profession = 'student';
        this.studentID = undefined;
    }
}

class Officer extends Person {
    constructor() {
        super(); //without super, "this" will be undefined.
        this.profession = 'officer';
        this.officerID = undefined;
    }
}

class greet {
    constructor() {
        this.greetMsg = 'Hello';
    }
    sendGreeting(data) {
        console.log(`${this.greetMsg} ${data}`);
    }
}

let myStudent = new Student;
myStudent.name = 'geoff';
myStudent.age = 24;
myStudent.height = "5'10";
myStudent.weight = 150;
myStudent.studentID = 5560223;

let myGreeting = new greet;
myGreeting.sendGreeting(myStudent.name);
console.log(myStudent);


