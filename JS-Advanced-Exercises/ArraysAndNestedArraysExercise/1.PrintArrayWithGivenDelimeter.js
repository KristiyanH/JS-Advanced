function solve(arr, delimeter) {

    let elements = arr.slice(arr);

    console.log(elements.join(delimeter))
}

solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
);

solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
);