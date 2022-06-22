const assert = require('chai').assert;
const isSymmetric = require('../5.CheckForSymmetry');

describe('Testing isSymmetric functionallity', () => {
    it('should return false when input is incorrect type', function () {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(5), expectedResult);
    });

    it('should pass when array is symmetric', function () {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should not pass when array is not symmetric', function () {
        let input = [1, 2, 3, 5, 8];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should pass when an empty array is provided', function () {
        let actualResult = isSymmetric([]);

        assert.equal(actualResult, true);
    });

    it('should pass when symmetric string array is provided', function () {
        let actualResult = isSymmetric(['pesho', 'gosho', 'pesho']);

        assert.equal(actualResult, true);
    });

    it('should fail when different types are passed', function () {
        let actualResult = isSymmetric(['1', 1]);

        assert.equal(actualResult, false);
    });
})