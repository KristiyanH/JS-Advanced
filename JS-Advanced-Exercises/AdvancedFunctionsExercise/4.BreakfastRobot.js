function solution() {

    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let menu = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function (input) {

        let manager = {
            restock: function (microElement, qty) {
                microElements[microElement] += qty;
                return 'Success';
            },

            prepare: function (recipe, qty) {
                let food = menu[recipe];
                let ingredientsNeeded = Object.keys(food);
                let quantityNeededPerRecipe = Object.values(food);

                for (let i = 0; i < Object.entries(food).length; i++) {
                    if (microElements[ingredientsNeeded[i]] - quantityNeededPerRecipe[i] * qty < 0) {
                        return `Error: not enough ${ingredientsNeeded[i]} in stock`
                    }
                }

                let index = 0;

                for (const ingredient of ingredientsNeeded) {
                    microElements[ingredient] -= quantityNeededPerRecipe[index++] * qty
                }

                return 'Success';
            },

            report: function () {
                return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
            }
        }

        let tokens = input.split(' ');
        let command = tokens[0];

        let arg1 = tokens[1];
        let quantity = Number(tokens[2]);

        return manager[command](arg1, quantity);
    }
}

let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"))

// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));


