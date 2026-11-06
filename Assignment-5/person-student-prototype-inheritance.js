// Q5: Implement Person -> Student inheritance with constructor functions.

function Person(name) {
    this.name = name;
}

// Add the method to Person's prototype.
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    // Call Person so the Student object receives the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Link Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add a Student-specific method.
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const student = new Student("Aarav", "Computer Science");

student.showName();   // Inherited from Person.prototype
student.showBranch(); // Defined on Student.prototype

console.log(
    "Person prototype is in Student prototype chain:",
    Person.prototype.isPrototypeOf(student)
); // true
