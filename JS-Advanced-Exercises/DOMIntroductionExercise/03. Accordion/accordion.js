function toggle() {
    let button = document.getElementsByClassName('button');

    let el = document.getElementById('extra');

    if (button[0].textContent == 'More') {
        button[0].textContent = 'Less';
        el.style.display = 'block';
    } else if (button[0].textContent == 'Less') {
        button[0].textContent = 'More';
        el.style.display = 'none';
    }
}