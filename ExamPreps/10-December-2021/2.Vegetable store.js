class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (let i = 0; i < vegetables.length; i++) {
            let split = vegetables[i].split(' ');
            let type = split[0];
            let quantity = Number(split[1]);
            let price = Number(split[2]);

            let obj = {
                type,
                quantity,
                price
            };

            let product = this.availableProducts.find(x => x.type == type);

            if (product) {
                this.availableProducts.find(x => x.type == type).quantity += quantity;
                if (price > product.price) {
                    product.price = price;
                }
            } else {
                this.availableProducts.push(obj);
            }
        }

        let result = 'Successfully added ';

        for (const product of this.availableProducts) {
            result += `${product.type}, `;
        }

        return result.substring(-1, result.length - 2);
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const el of selectedProducts) {
            let split = el.split(' ');
            let type = split[0];
            let qty = Number(split[1]);
            let product = this.availableProducts.find(x => x.type == type);

            if (!product) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else if (qty > product.quantity) {
                throw new Error(`The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                totalPrice += product.price * qty;
                product.quantity -= qty;
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let product = this.availableProducts.find(x => x.type == type);
        if (!product) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let firstLine = 'Available vegetables:';

        let secondLine = '';

        for (const product of this.availableProducts.sort((a, b) => a.price - b.price)) {
            secondLine += `${product.type}-${product.quantity}-$${product.price}\n`;
        }

        let thirdLine = `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return `${firstLine}\n${secondLine.trimEnd()}\n${thirdLine}`;
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());



