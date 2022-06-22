function solve(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > array.length) {
        end = array.length;
    }

    for (const element of array) {
        if (!Number(element)) {
            return NaN;
        }
    }
    let sum = array.slice(start, end + 1).reduce((a, b) => a + b, 0);
    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));