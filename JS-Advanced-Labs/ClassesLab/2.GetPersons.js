function solve() {
    let people = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            if (firstName) {
                this.firstName = firstName;
            }
            if (lastName) {
                this.lastName = lastName;
            }
            if (age) {
                this.age = age;
            }
            if (email) {
                this.email = email;
            }
            this.toString = function () {
                return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
            }
        }
    }

    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let softUni = new Person('SoftUni', '', '', '');
    let stephan = new Person('Stephan', 'Johnson', 25, '');
    let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    people.push(anna);
    people.push(softUni);
    people.push(stephan);
    people.push(gabriel);

    return people;

}