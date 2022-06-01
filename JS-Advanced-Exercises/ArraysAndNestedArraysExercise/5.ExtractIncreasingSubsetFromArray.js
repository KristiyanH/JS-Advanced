function solve(arr) {
    return (arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))));
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(solve([1,
    2,
    3,
    4]
));
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));