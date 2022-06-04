function solve(input) {
    const engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}]
    const carriages = [{type: 'hatchback', color: input.color}, {type: 'coupe', color: input.color}];
    let wheelSize = input.wheelsize % 2 == 1 ? input.wheelsize : input.wheelsize - 1;

    return {
        model: input.model,
        engine: engines.filter(x => input.power <= x.power)[0],
        carriage: carriages.filter(x => x.type == input.carriage)[0],
        wheels: new Array(4).fill(wheelSize)
    };
}

solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);