function validate() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    document.getElementById('email').addEventListener('change', onChange);
    let input = document.getElementById('email');

    function onChange() {
        if (emailRegex.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}