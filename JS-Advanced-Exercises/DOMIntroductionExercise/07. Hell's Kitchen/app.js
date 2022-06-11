function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);
        let avgSalary = 0;
        let totalSalary = 0;
        let currAverageSalary = 0;
        let bestName = '';
        let output = {};
        //["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

        for (const inputElement of input) {
            let restaurantInfo = inputElement.split(' - ');
            let restaurantName = restaurantInfo.shift();
            let workersData = restaurantInfo[0].split(', ');

            for (const worker of workersData) {
                let [name, salary] = worker.split(' ');

                if (!output.hasOwnProperty(restaurantName)) {
                    output[restaurantName] = {};
                }
                if (output.hasOwnProperty(restaurantName)) {
                    output[restaurantName][name] = Number(salary);
                }
            }
        }

        let entries = Object.entries(output);

        for (const entry of entries) {
            let key = entry[0];
            let values = Object.entries(entry[1]);

            for (const [name, salary] of values) {
                totalSalary += salary;
            }

            avgSalary = totalSalary / values.length;

            if (avgSalary > currAverageSalary) {
                currAverageSalary = avgSalary;
                bestName = key;
                totalSalary = 0;
            }
        }

        let result = Object.entries(output[bestName])
            .sort((a, b) => b[1] - a[1]);

        let print = '';

        result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]} `);

        document.querySelector('#bestRestaurant p')
            .textContent = `Name: ${bestName} Average Salary: ${currAverageSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

        document.querySelector('#workers p').textContent = print;
    }
}