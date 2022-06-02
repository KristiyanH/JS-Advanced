function solve(input) {
    const obj = {};

    for (const inputElement of input) {
        const tokens = inputElement.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (obj[name] == undefined) {
            obj[name] = population;
        } else {
            obj[name] += population;
        }

    }

    for (const town in obj) {
        console.log(`${town} : ${obj[town]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);