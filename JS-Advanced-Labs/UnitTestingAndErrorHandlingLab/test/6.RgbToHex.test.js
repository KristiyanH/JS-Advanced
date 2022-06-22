let assert = require('chai').assert;
const rgbToHexColor = require('../6.RgbToHex');

describe('Testing rgbToHexColor functionallity', function () {
    it('should return undefined if red is not integer', function () {
        let input = ['red', 202, 255];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined if green is not integer', function () {
        let input = [203, 'green', 255];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined if blue is not integer', function () {
        let input = [203, 255, 'blue'];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined red is less than zero', function () {
        let input = [-5, 203, 255];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined green is less than zero', function () {
        let input = [231, -4, 255];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined blue is less than zero', function () {
        let input = [225, 203, -5];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined red is more than 255', function () {
        let input = [262, 203, 251];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined green is more than 255', function () {
        let input = [232, 265, 251];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined blue is more than 255', function () {
        let input = [243, 221, 276];
        let [r, g, b] = input;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('should return correct hexadecimal', function () {
        let input = [203, 203, 203];
        let [r, g, b] = input;

        let expectedResult = '#CBCBCB';

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it('more than 3 parameters', function () {
        let input = [0, 0, 0, 0];
        let [r, g, b] = input;
        let expectedResult = '#000000';
        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });

    it(`test saturation from specs -> (255, 158, 170) -> #FF9EAA`, () => {
        let input = [255, 158, 170];
        let [r, g, b] = input;
        let expectedResult = '#FF9EAA';

        let actualResult = rgbToHexColor(r, g, b);

        assert.equal(actualResult, expectedResult);
    });
});