function solve(name, population, treasury) {
    const obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        }
    };

    return obj;
}

solve('Tortuga',
    7000,
    15000
);

solve('Santo Domingo',
    12000,
    23500
);