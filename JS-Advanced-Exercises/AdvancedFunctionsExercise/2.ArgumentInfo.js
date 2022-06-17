function solve(...input) {
    const types = {};

    for (const element of input) {
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if (!types[type]) {
            types[typeof element] = 0;
        }
        types[type]++;
    }

    let entries = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const entry of entries) {
        console.log(`${entry[0]} = ${entry[1]}`);
    }
}


solve('cat', 42, function () {
    console.log('Hello world!');
});

// solve({name: 'bob'}, 3.333, 9.999);