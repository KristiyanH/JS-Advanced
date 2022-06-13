function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseOver);
    let result = document.getElementById('result');

    function onMouseOver(event) {
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }
}