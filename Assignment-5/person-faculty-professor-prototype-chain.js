// Q6: Create the chain Person -> Faculty -> Professor.
// Each constructor has its own property and each prototype has its own method.

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log("Person name:", this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};

const professor = new Professor(
    "Dr. Mehta",
    "Computer Science",
    "JavaScript"
);

// The object can use its own method and methods inherited up the chain.
professor.showSubject();
professor.showDepartment();
professor.introduce();

console.log(
    "Person is in the prototype chain:",
    Person.prototype.isPrototypeOf(professor)
); // true
