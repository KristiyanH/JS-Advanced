function solve(matrix) {
    let isMagical = true;

    for (let row = 0; row < matrix.length - 1; row++) {
        let rowSumOne = matrix[row].reduce((a, b) => a + b, 0);
        let rowSumTwo = matrix[row + 1].reduce((a, b) => a + b, 0);
        let colSumOne = 0;
        let colSumTwo = 0;

        for (let col = 0; col < matrix.length; col++) {
            colSumOne += matrix[row][col];
            colSumTwo += matrix[row + 1][col];
        }

        if (rowSumOne !== rowSumTwo || colSumOne !== colSumTwo) {
            isMagical = false;
        }
    }

    return isMagical;
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);