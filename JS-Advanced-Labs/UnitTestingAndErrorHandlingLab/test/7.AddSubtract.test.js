const assert = require('chai').assert;
const createCalculator = require('../7.AddSubtract');

describe('Testing createCalculator functionality', function () {
    it('keeps internal sum that cant be modified from the outside', function () {
        let calc = createCalculator();
        let expectedResult = 0;
        let actualResult = calc.get();
        assert.equal(actualResult, expectedResult);
    });

    it('should increase value when add is called', function () {
        let calc = createCalculator();
        let expectedResult = 5;
        calc.add(5);
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('should subtract value when subtract is called', function () {
        let calc = createCalculator();
        let expectedResult = -5;
        calc.subtract(5);
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('should be an object with correct properties', function () {
        let calc = createCalculator();
        let expectedResult = true;

        assert.equal(calc.hasOwnProperty('add'), true);
        assert.equal(calc.hasOwnProperty('subtract'), true);
        assert.equal(calc.hasOwnProperty('get'), true);
    });

    it('should return number when get is called', function () {
        let calc = createCalculator();
        let expectedResult = true;
        let actualResult = Number.isInteger(calc.get());

        assert.equal(actualResult, expectedResult);
    });

    it('should return NaN when passing non number param on add', function () {
        let calc = createCalculator();
        let expectedResult = true;
        calc.add('asd');
        let actualResult = Number.isNaN(calc.get());

        assert.equal(actualResult, expectedResult);
    });
})