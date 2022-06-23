function validate() {
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^[\w]{5,15}$/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]+$/;

    document.getElementById('company').addEventListener('change', onChange);

    function onChange() {
        let companyInfo = document.getElementById('companyInfo');
        if (!document.getElementById('company').checked) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    }

    document.getElementById('submit').addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();
        let username = document.getElementById('username')
        let password = document.getElementById('password');
        let email = document.getElementById('email');
        let confirmPassword = document.getElementById('confirm-password');

        let invalidFields = [];
        document.querySelector('#valid').style.display = 'none';
        invalidFields.forEach(x => x.style.borderColor = 'none');

        if (!usernameRegex.test(username.value)) {
            invalidFields.push(username);
        }

        if (!passwordRegex.test(password.value) || password.value !== confirmPassword.value) {
            invalidFields.push(password);
            invalidFields.push(confirmPassword);
        }

        if (!emailRegex.test(email.value)) {
            invalidFields.push(email);
        }


        if (document.getElementById('company').checked) {
            let companyId = document.getElementById('companyNumber');
            let companyRegex = /^[0-9]{4}$/;
            if (!companyRegex.test(companyId.value)) {
                invalidFields.push(companyId);
            }
        }

        invalidFields.forEach(x => x.style.borderColor = 'red');
        !invalidFields.length ? document.querySelector('#valid').style.display = 'block' : document.querySelector('#valid').style.display = 'none';
    }
}
