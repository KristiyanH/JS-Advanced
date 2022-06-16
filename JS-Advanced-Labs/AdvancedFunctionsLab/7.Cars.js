function solve(arr) {
    let objects = [];

    let commands = {
        create: (n, inherits, n2) => (objects[n] = inherits ? Object.create(objects[n2]) : {}),
        set: (name, key, value) => objects[name][key] = value,
        print: (name) => {
            let entry = [];

            for (const key in objects[name]) {
                entry.push(`${key}:${objects[name][key]}`);
            }

            console.log(entry.join(','));
        }
    }

    arr.forEach(x => {
        let [command, name, key, value] = x.split(' ');
        commands[command](name, key, value);
    })
}

console.log(solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
));