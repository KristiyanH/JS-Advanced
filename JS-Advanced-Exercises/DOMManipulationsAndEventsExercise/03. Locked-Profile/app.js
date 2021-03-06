function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('div.profile button')).forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        let parent = event.target.parentElement;
        let lock = parent.querySelector('input[value="lock"]');

        if (!lock.checked) {
            let hiddenFields = parent.querySelector('div');
            if (event.target.textContent == 'Show more') {
                hiddenFields.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}