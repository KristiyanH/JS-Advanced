function solve(steps, footprintLength, speedKm) {

    let distanceInMeters = steps * footprintLength;
    let speedInMetersSec = speedKm / 3.6
    let time = distanceInMeters / speedInMetersSec
    let rest = Math.floor(distanceInMeters / 500);

    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}

solve(4000, 0.60, 5)