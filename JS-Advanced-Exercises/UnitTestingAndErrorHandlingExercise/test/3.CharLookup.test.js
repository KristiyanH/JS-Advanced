const assert = require('chai').assert;
const lookupChar = require('../3.CharLookup');

describe('Testing lookupChar functionality', function () {
    it('should return undefined if non string is passed', function () {
        let input = [5, 3];
        let [string, index] = input;
        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined if index is not integer', function () {
        let input = ['string', null];
        let [string, index] = input;
        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('should return undefined if index is floating point', function () {
        let input = ['string', 3.52];
        let [string, index] = input;
        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('should return text if string length is less or even to index', function () {
        let input = ['string', 6];
        let [string, index] = input;
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('should return text if index is less than zero', function () {
        let input = ['string', -1];
        let [string, index] = input;
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('should return the correct character of string', function () {
        let input = ['string', 3];
        let [string, index] = input;
        let expectedResult = 'i';
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });


})