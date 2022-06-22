function solve(face, suit) {
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (faces.includes(face) == false) {
        throw new Error('Invalid face: ' + face);
    }

    if (suits[suit] == undefined) {
        throw new Error('Invalid suit: ' + suit);
    }

    const result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }

    return result;
}

console.log(solve('A', 'S').toString());
console.log(solve('10', 'H').toString());
console.log(solve('1', 'C').toString());