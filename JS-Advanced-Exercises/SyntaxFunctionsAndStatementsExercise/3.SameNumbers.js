function solve(num) {
    let numString = String(num);
    let areSame = true;
    let sum = 0;
    for (let i = 0; i < numString.length / 2; i++) {

        if (numString[i] != numString[i + 1]) {
            areSame = false;
            break;
        }
    }

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    console.log(areSame);
    console.log(sum);
}
