const assert = require('chai').assert;
const companyAdministration = require('../3.CompanyAdministration');

describe('Testing companyAdministration functionality', function () {

    describe('hiringEmployee Method', function () {
        it('should throw error if position is not Programmer', function () {
            let name = 'Peter Peterson';
            let position = 'other';
            let yearsExperience = 5;

            assert.throws(() => companyAdministration.hiringEmployee(name, position, yearsExperience), Error, `We are not looking for workers for this position.`)
        });

        it('should return error message if experience is less than 3 years', function () {
            let name = 'Peter Peterson';
            let position = 'Programmer';
            let yearsExperience = 2;

            let expectedResult = `${name} is not approved for this position.`;
            let actualResult = companyAdministration.hiringEmployee(name, position, yearsExperience);

            assert.equal(actualResult, expectedResult);
        });

        it('should work if experience is 3+ years', function () {
            let name = 'Peter Peterson';
            let position = 'Programmer';
            let yearsExperience = 3;

            let expectedResult = `${name} was successfully hired for the position ${position}.`;
            let actualResult = companyAdministration.hiringEmployee(name, position, yearsExperience);

            assert.equal(actualResult, expectedResult);
            assert.equal(actualResult, companyAdministration.hiringEmployee(name, position, 5));
        });
    })

    describe('calculateSalary Method', function () {
        it('should throw error if hours are less than 0', function () {
            assert.throws(() => companyAdministration.calculateSalary(-3), Error, 'Invalid hours');
        });
        it('should throw error if hours is not a number', function () {
            assert.throws(() => companyAdministration.calculateSalary('string'), Error, 'Invalid hours');
        });

        it('should work with correct data', function () {
            let hours = 10;

            let expectedResult = 150;
            let actualResult = companyAdministration.calculateSalary(hours);

            assert.equal(actualResult, expectedResult);
        });

        it('should add 1000 to salary if hours are more than 160', function () {
            let hours = 170;

            let expectedResult = 3550;
            let actualResult = companyAdministration.calculateSalary(hours);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('firedEmployee Method', function () {
        it('should throw error if employees is not array', function () {
            let employees = 'Pesho, Ivan';
            let index = 1;

            assert.throws(() => companyAdministration.firedEmployee(employees, index), Error, 'Invalid input');
        });
        it('should throw error if index is not number', function () {
            let employees = ["Petar", "Ivan", "George"];
            let index = 'asd';

            assert.throws(() => companyAdministration.firedEmployee(employees, index), Error, 'Invalid input');
        });
        it('should throw error if index is bigger or equal to employees length', function () {
            let employees = ["Petar", "Ivan", "George"];
            let index = 3;

            assert.throws(() => companyAdministration.firedEmployee(employees, index), Error, 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(employees, 5), Error, 'Invalid input');
        });
        it('should throw error if index is negative number', function () {
            let employees = ["Petar", "Ivan", "George"];
            let index = -1;

            assert.throws(() => companyAdministration.firedEmployee(employees, index), Error, 'Invalid input');
        });

        it('should remove element with correct input', function () {
            let employees = ["Petar", "Ivan", "George"];
            let index = 1;

            let expectedResult = ['Petar', 'George'];
            let actualResult = companyAdministration.firedEmployee(employees, index);
        });
    })
})

// 86/100