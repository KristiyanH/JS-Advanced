const assert = require('chai').assert;
const isOddOrEven = require('../2.EvenOrOdd');

describe('Testing isOddOrEven functionality', function () {
    it('should return undefined when non string param is passed', function () {
        let input = [1, 2];
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should return even when passed even string', function () {
        let input = 'abcd';
        let expectedResult = 'even';
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should return odd when passed odd string', function () {
        let input = 'abc';
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should work when passing multiple strings', function () {
        assert.equal(isOddOrEven('ab'), 'even');
        assert.equal(isOddOrEven('123'), 'odd');
        assert.equal(isOddOrEven('1243'), 'even');
        assert.equal(isOddOrEven('accbt'), 'odd');
    });
})