function solve(arr) {
    let output = [];

    let commands = {
        add: (str) => output.push(str),
        remove: (str) => (output = output.filter(x => x !== str)),
        print: () => console.log(output.join(','))
    };

    arr.forEach(x => {
        const [command, value] = x.split(' ');
        commands[command](value);
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

// 75/100