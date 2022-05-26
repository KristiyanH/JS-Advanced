function solve(input) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < input.length; row++) {
        mainSum += input[row][row];
        secondarySum += input[row][input.length - row - 1];
    }

    console.log(`${mainSum} ${secondarySum}`)
}

solve([[20, 40],
    [10, 60]]
);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);