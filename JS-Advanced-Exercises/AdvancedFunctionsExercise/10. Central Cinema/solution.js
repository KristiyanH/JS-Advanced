function solve() {
    document.querySelector('form button').addEventListener('click', onScreen);
    const [name, hall, ticketPrice] = document.querySelectorAll('form input');

    function onScreen(event) {
        event.preventDefault();
        if (!Number(ticketPrice.value) || hall.value === '' || name.value === '') {
            return;
        }

        let movieSection = document.getElementById('movies');
        let ul = movieSection.children[1];
        let li = document.createElement('li');
        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let div = document.createElement('div');
        let strong2 = document.createElement('strong');
        let input = document.createElement('input');
        let button = document.createElement('button');

        span.textContent = name.value;
        strong.textContent = `Hall: ${hall.value}`;
        strong2.textContent = Number(ticketPrice.value).toFixed(2);
        input.placeholder = 'Tickets Sold';
        button.textContent = 'Archive';

        li.appendChild(span);
        li.appendChild(strong);
        div.appendChild(strong2);
        div.appendChild(input);
        div.appendChild(button);
        li.appendChild(div);
        ul.appendChild(li);

        button.addEventListener('click', onArchive);

        let archiveSection = document.getElementById('archive');
        let ulArchive = archiveSection.children[1];
        let liArchive = document.createElement('li');
        let strongArchive = document.createElement('strong');
        let buttonDelete = document.createElement('button');

        function onArchive() {
            console.log(ticketPrice.value);
            console.log(input.value);

            if (!input.value || !Number(input.value)) {
                return;
            }

            strongArchive.textContent = `Total amount: ${(Number(strong2.textContent) * Number(input.value)).toFixed(2)}`;

            liArchive.appendChild(span);
            liArchive.appendChild(strongArchive);
            liArchive.appendChild(buttonDelete);
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', onDelete);

            let buttonClear = archiveSection.children[2];
            buttonClear.addEventListener('click', onClear);

            ulArchive.appendChild(liArchive);
            li.remove();
        }

        function onClear() {
            ulArchive.remove();
        }

        function onDelete() {
            liArchive.remove();
        }

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
    }
}

// 90/100