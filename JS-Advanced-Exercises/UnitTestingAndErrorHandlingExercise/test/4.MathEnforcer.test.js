const assert = require('chai').assert;
const mathEnforcer = require('../4.MathEnforcer');

describe('Testing mathEnforcer functionality', function () {

    describe('addFive functionality', function () {
        it('should return undefined when calling addFive with non number param', function () {
            let input = 'five';
            let expectedResult = undefined;

            let actualResult = mathEnforcer.addFive(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should add five when calling addFive', function () {
            let input = 5;
            let expectedResult = 10;

            let actualResult = mathEnforcer.addFive(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with floating point nums', function () {
            let input = 5.3;
            let expectedResult = 10.3;

            let actualResult = mathEnforcer.addFive(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with negative nums', function () {
            let input = -7;
            let expectedResult = -2;

            let actualResult = mathEnforcer.addFive(input);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('subtractTen functionality', function () {
        it('should return undefined when calling subtractTen with non number param', function () {
            let input = 'twenty';
            let expectedResult = undefined

            let actualResult = mathEnforcer.subtractTen(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should subtract ten when calling subtractTen', function () {
            let input = 25;
            let expectedResult = 15;

            let actualResult = mathEnforcer.subtractTen(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with floating point nums', function () {
            let input = 10.5;
            let expectedResult = 0.5;

            let actualResult = mathEnforcer.subtractTen(input);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with negative nums', function () {
            let input = -3;
            let expectedResult = -13;

            let actualResult = mathEnforcer.subtractTen(input);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('sum functionality', function () {
        it('should return undefined if first param of sum is not a number', function () {
            let num1 = 'invalid';
            let num2 = 5

            let expectedResult = undefined;

            let actualResult = mathEnforcer.sum(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('should return undefined if second param of sum is not a number', function () {
            let num1 = 5;
            let num2 = 'invalid';

            let expectedResult = undefined;

            let actualResult = mathEnforcer.sum(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('should return correct sum if params are valid', function () {
            let num1 = 5;
            let num2 = 10;

            let expectedResult = 15;

            let actualResult = mathEnforcer.sum(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with floating point nums', function () {
            let num1 = 5.3;
            let num2 = 10.2;
            let expectedResult = 15.5;

            let actualResult = mathEnforcer.sum(num1, num2);

            assert.equal(actualResult, expectedResult);
        });

        it('should work correctly with negative nums', function () {
            let num1 = -3;
            let num2 = -5;
            let expectedResult = -8;

            let actualResult = mathEnforcer.sum(num1, num2);

            assert.equal(actualResult, expectedResult);
        });
    })
})