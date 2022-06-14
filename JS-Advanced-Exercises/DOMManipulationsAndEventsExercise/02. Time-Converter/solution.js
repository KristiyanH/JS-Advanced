function attachEventsListeners() {
    Array.from(document.querySelectorAll('input[type="button"]')).forEach(x => x.addEventListener('click', onConvert));
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        };
    }

    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }
}