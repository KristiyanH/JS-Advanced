function sameNumbers(number){

    let lastDigit = number % 10;
    let falseCounter = 0;
    let sum = 0;
    while (number /= 10 > 0) {
        let digit = number % 10;
        sum += digit;
        if (lastDigit !== digit) {
            falseCounter++;
        }
        digit = number / 10;
        number = Math.floor(number / 10);
    }

    console.log(falseCounter === 0)
    console.log(sum);
}