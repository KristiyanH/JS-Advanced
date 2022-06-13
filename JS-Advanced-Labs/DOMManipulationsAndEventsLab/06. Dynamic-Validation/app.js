function validate() {
    document.querySelector('input').addEventListener('change', onChange);
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function onChange(ev) {
        if (ev.target.value.match(regexEmail)) {
            ev.target.className = '';
            return;
        }

        ev.target.className = 'error';
    }
}