function solve(num) {
    let numString = String(num);
    let areSame = true;
    let sum = 0;
    let firstDigit = numString[0];

    for (let i = 0; i < numString.length; i++) {
        let currentDigit = +numString[i];
        sum += currentDigit;
        if (firstDigit != currentDigit) {
            areSame = false;
        }
    }

    console.log(areSame);
    console.log(sum);
}

solve(2222222);
