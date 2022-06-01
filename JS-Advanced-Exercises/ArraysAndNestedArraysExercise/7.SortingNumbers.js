function solve(input) {
    input.sort((a, b) => b - a);
    let arr = [];

    while (input.length !== 0) {
        arr.push(input.pop());
        arr.push(input.shift());
    }

    return arr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));