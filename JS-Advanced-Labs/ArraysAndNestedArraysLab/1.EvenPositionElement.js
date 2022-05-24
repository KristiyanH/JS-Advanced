function solve(input) {
    let arr = [];
    let length = input.length;

    for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            arr.push(input[i]);
        }
    }

    console.log(arr.join(" "));
}

solve(['20', '30', '40', '50', '60'])