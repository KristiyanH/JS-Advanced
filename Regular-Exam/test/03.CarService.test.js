const assert = require('chai').assert;
const carService = require('../03.CarService');

describe('Testing carService functionality', function () {

    describe('isItExpensive Method', function () {
        it('should return expensive message if issue is Engine', function () {
            let issue = 'Engine';

            let expectedResult = `The issue with the car is more severe and it will cost more money`;
            let actualResult = carService.isItExpensive(issue);

            assert.equal(actualResult, expectedResult);
        });
        it('should return expensive message if issue is Transmission', function () {
            let issue = 'Transmission';

            let expectedResult = `The issue with the car is more severe and it will cost more money`;
            let actualResult = carService.isItExpensive(issue);

            assert.equal(actualResult, expectedResult);
        });
        it('should return cheap message if issue is not Engine/Transmission', function () {
            let issue = 'something';

            let expectedResult = `The overall price will be a bit cheaper`;
            let actualResult = carService.isItExpensive(issue);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('discount Method', function () {
        it('should throw error if numberOfParts is not a number', function () {
            let numberOfParts = '5';
            let totalPrice = 100;

            assert.throws(() => carService.discount(numberOfParts, totalPrice), Error, 'Invalid input');
        });
        it('should throw error if totalPrice is not a number', function () {
            let numberOfParts = 5;
            let totalPrice = '100';

            assert.throws(() => carService.discount(numberOfParts, totalPrice), Error, 'Invalid input');
        });

        it('should apply 15% if numberOfParts > 2 && <= 7', function () {
            let numberOfParts = 5;
            let totalPrice = 100;

            let expectedResult = `Discount applied! You saved 15$`;
            let actualResult = carService.discount(numberOfParts, totalPrice);

            assert.equal(actualResult, expectedResult);
        });
        it('should apply 30% if numberOfParts > 7', function () {
            let numberOfParts = 8;
            let totalPrice = 100;

            let expectedResult = `Discount applied! You saved 30$`;
            let actualResult = carService.discount(numberOfParts, totalPrice);

            assert.equal(actualResult, expectedResult);
        });
        it('should not be able to apply discount if parts are < 2', function () {
            let numberOfParts = 1;
            let totalPrice = 100;

            let expectedResult = "You cannot apply a discount";
            let actualResult = carService.discount(numberOfParts, totalPrice);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('partsToBuy Method', function () {
        it('should throw error if partsCatalog is not array', function () {
            let partsCatalog = 5;
            let neededParts = ['something', 'something2'];

            assert.throws(() => carService.partsToBuy(partsCatalog, neededParts), Error, 'Invalid input');
        });
        it('should throw error if neededParts is not array', function () {
            let partsCatalog = ['something', 'something2'];
            let neededParts = 5;

            assert.throws(() => carService.partsToBuy(partsCatalog, neededParts), Error, 'Invalid input');
        });

        it('should return 0 if parts are not on the catalog', function () {
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}];
            let neededParts = ["valve", "injectors"];

            let expectedResult = 0;
            let actualResult = carService.partsToBuy(partsCatalog, neededParts);

            assert.equal(actualResult, expectedResult);
        });
        it('should return the correct sum', function () {
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}];
            let neededParts = ["blowoff valve", "injectors"];

            let expectedResult = 145;
            let actualResult = carService.partsToBuy(partsCatalog, neededParts);

            assert.equal(actualResult, expectedResult);
        });
        it('should return the correct sum second test', function () {
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}];
            let neededParts = ["blowoff valve", "coil springs"];

            let expectedResult = 375;
            let actualResult = carService.partsToBuy(partsCatalog, neededParts);

            assert.equal(actualResult, expectedResult);
        });
    })
})