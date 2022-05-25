function solve(array) {
    let firstIndex = array.indexOf(Math.min(...array));
    let first = array[firstIndex];
    array.splice(firstIndex, 1);
    let secondIndex = array.indexOf(Math.min(...array));
    let second = array[secondIndex];

    console.log(`${first} ${second}`);
}

solve([30, 15, 50, 5])