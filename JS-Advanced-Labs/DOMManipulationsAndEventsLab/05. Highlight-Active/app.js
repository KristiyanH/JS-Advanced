function focused() {
    let inputs = Array.from(document.querySelectorAll('input')).forEach(x => {
        x.addEventListener('focus', onFocus);
        x.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        if (event.target.state = 'focused') {
            event.target.parentElement.className = 'focused';
        }
    }

    function onBlur(event) {
        if (event.target.state = 'blur') {
            event.target.parentElement.className = '';
        }
    }
}