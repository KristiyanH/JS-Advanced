function notify(message) {
    document.getElementById('notification').addEventListener('click', onClick);
    let div = document.getElementById('notification')
    div.textContent = message;
    div.style.display = 'block';

    function onClick() {
        div.style.display = 'none';
    }
}