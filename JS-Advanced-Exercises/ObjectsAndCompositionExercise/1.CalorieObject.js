function solve(input) {
    let foodNames = input.filter((x, i) => i % 2 == 0);
    let calories = input.filter((x, i) => i % 2 !== 0);

    const obj = {};
    let counter = 0;

    for (const foodName of foodNames) {
        obj[foodName] = Number(calories[counter++]);
    }

    return obj;
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);