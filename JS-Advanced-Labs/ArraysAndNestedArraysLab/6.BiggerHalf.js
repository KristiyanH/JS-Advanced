function solve(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    const result = [];

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);