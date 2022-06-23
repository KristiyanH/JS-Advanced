function solve(arr, criteria) {
    let classes = [];

    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    for (const arrElement of arr) {
        let tokens = arrElement.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(destination, price, status);
        classes.push(ticket);
    }

    return classes.sort(function (a, b) {
        if (criteria == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria == 'status') {
            return a.status.localeCompare(b.status);
        } else if (criteria == 'price') {
            return a > b;
        }
    })
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));