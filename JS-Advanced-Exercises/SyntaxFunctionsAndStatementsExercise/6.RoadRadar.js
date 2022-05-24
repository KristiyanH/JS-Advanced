function solve(speed, area) {
    let limit;
    let difference;
    let status;

    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else if (area == 'residential') {
        limit = 20;
    }

    if (speed > limit) {
        difference = speed - limit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }


}