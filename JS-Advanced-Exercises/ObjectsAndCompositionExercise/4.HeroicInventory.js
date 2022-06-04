function solve(input) {
    const heroes = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        const hero = {
            name,
            level,
            items
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);