function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > biggest) {
                biggest = input[i][j];
            }
        }

    }
    console.log(biggest);
}

solve([[20, 50, 10],
    [8, 33, 145]]
);

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);