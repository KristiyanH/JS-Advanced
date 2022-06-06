function solve(input) {
    const obj = {};

    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');
        let firstLetter = product[0];

        if (!obj.hasOwnProperty(firstLetter)) {
            obj[firstLetter] = {};
        }
        obj[firstLetter][product] = price;
    }
    let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const letter of sortedLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProducts) {
            let price = Number(obj[letter][product]);
            console.log(`${product}: ${price}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);