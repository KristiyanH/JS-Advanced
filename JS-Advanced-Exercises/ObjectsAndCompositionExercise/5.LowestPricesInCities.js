function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        const tokens = input[i].split(' | ');
        let townName = tokens[0];
        let productName = tokens[1];
        let productPrice = Number(tokens[2]);

        if (!obj.hasOwnProperty(productName)) {
            obj[productName] = {townName, productPrice};
        } else {
            if (productPrice < obj[productName].productPrice) {
                obj[productName] = {townName, productPrice};
            }
        }
    }

    for (const objKey in obj) {
        console.log(`${objKey} -> ${obj[objKey].productPrice} (${obj[objKey].townName})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);