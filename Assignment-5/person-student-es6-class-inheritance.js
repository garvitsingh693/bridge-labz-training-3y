// Q9: Rewrite Person -> Student inheritance using ES6 classes.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the parent constructor.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const classStudent = new Student("Aarav", "Computer Science");

classStudent.showName();   // Inherited from Person
classStudent.showBranch(); // Student's own method

// The same behavior using the constructor/prototype version:
function PersonFunction(name) {
    this.name = name;
}

PersonFunction.prototype.showName = function () {
    console.log("Name:", this.name);
};

function StudentFunction(name, branch) {
    PersonFunction.call(this, name);
    this.branch = branch;
}

StudentFunction.prototype = Object.create(PersonFunction.prototype);
StudentFunction.prototype.constructor = StudentFunction;

StudentFunction.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const prototypeStudent = new StudentFunction(
    "Aarav",
    "Computer Science"
);

prototypeStudent.showName();
prototypeStudent.showBranch();

// Both versions provide the same properties and inherited behavior.
// ES6 classes are cleaner syntax built on JavaScript's prototype system.
