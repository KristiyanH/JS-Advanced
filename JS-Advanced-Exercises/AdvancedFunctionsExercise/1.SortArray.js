function solve(...arr) {
    if (arr[1] == 'asc') {
        return arr[0].sort((a, b) => a - b);
    } else {
        return arr[0].sort((a, b) => b - a);
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));