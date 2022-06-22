let assert = require('chai').assert;
const sum = require('../4.SumOfNumbers');

describe('Testing sumNumbers functionallity', () => {
    it('should add positive numbers', function () {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;

        let actualResult = sum(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should return false when adding positive numbers', function () {
        let input = [10, 20, 30];
        let expectedResult = 15;

        let actualResult = sum(input);

        assert.notEqual(actualResult, expectedResult);
    });

    it('should pass when adding negative numbers', function () {
        let input = [-1, -2, -3];
        let expectedResult = -6;

        let actualResult = sum(input);

        assert.equal(actualResult, expectedResult);
    });
})