const assert = require('chai').assert;
const bookSelection = require('../3.BookSelection');

describe('Testing bookSelection functionality', function () {

    describe('isGenreSuitable Method', function () {

        it('should not be suitable if genre is Thriller and age is less or equal to 12', function () {
            let genre = 'Thriller';
            let age = 11;

            let actualResult = bookSelection.isGenreSuitable(genre, age);
            let expectedResult = `Books with ${genre} genre are not suitable for kids at ${age} age`;

            assert.equal(actualResult, expectedResult);
        });

        it('should not be suitable if genre is Horror and age is less or equal to 12', function () {
            let genre = 'Horror';
            let age = 12;

            let actualResult = bookSelection.isGenreSuitable(genre, age);
            let expectedResult = `Books with ${genre} genre are not suitable for kids at ${age} age`;

            assert.equal(actualResult, expectedResult);
        });

        it('should be suitable for genre Horror if age is above 12', function () {
            let genre = 'Horror';
            let age = 13;

            let actualResult = bookSelection.isGenreSuitable(genre, age);
            let expectedResult = `Those books are suitable`;
        });

        it('should be suitable for genre Thriller if age is above 12', function () {
            let genre = 'Thriller';
            let age = 13;

            let actualResult = bookSelection.isGenreSuitable(genre, age);
            let expectedResult = `Those books are suitable`;
        });

    })

    describe('isItAffordable Method', function () {
        it('should throw error if price is not a number', function () {
            let price = 'price';
            let budget = 150;

            assert.throws(() => bookSelection.isItAffordable(price, budget), Error, 'Invalid input');
        });

        it('should throw error if budget is not a number', function () {
            let price = 15;
            let budget = 'budget';

            assert.throws(() => bookSelection.isItAffordable(price, budget), Error, 'Invalid input');
        });

        it('should not throw error if input is valid', function () {
            let price = 15;
            let budget = 100;

            assert.doesNotThrow(() => bookSelection.isItAffordable(price, budget), Error, 'Invalid input');
        });

        it('should return you dont have enough money if the result is lower than 0', function () {
            let price = 20;
            let budget = 15;

            let expectedResult = "You don't have enough money";
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult);
        });

        it('should return book bought if budget is enough', function () {
            let price = 15;
            let budget = 20;

            let expectedResult = `Book bought. You have 5$ left`;
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult);
        });
    })

    describe('suitableTitles Method', function () {
        it('should throw error if first argument is not array', function () {
            let array = 'array';
            let genre = 'Thriller';

            assert.throws(() => bookSelection.suitableTitles(array, genre), Error, 'Invalid input')
        });

        it('should throw error if second argument is not string', function () {
            let array = [1, 2, 3, 4]
            let genre = 5;

            assert.throws(() => bookSelection.suitableTitles(array, genre), Error, 'Invalid input')
        });

        it('should not throw error if arguments are valid', function () {
            let array = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: 'Some movie', genre: 'Horror'}];
            let genre = 'Thriller';

            assert.doesNotThrow(() => bookSelection.isGenreSuitable(array, genre), Error, 'Invalid input')
        });

        it('should add the title that equals the genre', function () {
            let array = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: 'Some movie', genre: 'Horror'}];
            let genre = 'Thriller';

            let expectedResult = 1
            let actualResult = bookSelection.suitableTitles(array, genre);

            assert.equal(actualResult.length, expectedResult);
        });

        it('should return the correct array', function () {
            let array = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: 'Some movie', genre: 'Horror'}];
            let genre = 'Thriller';

            let expectedResult = array.filter(x => x.genre == genre).map(x => x.title);

            let actualResult = bookSelection.suitableTitles(array, genre);

            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the correct array second test', function () {
            let array = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: 'Some movie', genre: 'Thriller'}];
            let genre = 'Thriller';

            let expectedResult = array.filter(x => x.genre == genre).map(x => x.title);

            let actualResult = bookSelection.suitableTitles(array, genre);

            assert.deepEqual(actualResult, expectedResult);
            assert.isTrue(Array.isArray(actualResult));
        });
    })
})

// 90/100