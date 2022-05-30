function solve(commands) {
    let initialNum = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            arr.push(initialNum++);
        } else if (commands[i] === 'remove') {
            arr.pop();
            initialNum++;
        }
    }

    if (arr.length == 0) {
        console.log('Empty')
    } else {
        arr.forEach(element => console.log(element));
    }
}

solve(['add',
    'add',
    'add',
    'add']
);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);