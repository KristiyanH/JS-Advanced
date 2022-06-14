function create(words) {
    let div = document.getElementById('content');

    words.forEach(x => {
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        pElement.textContent = x;
        pElement.style.display = 'none';
        divElement.appendChild(pElement);
        divElement.addEventListener('click', onClick);
        div.appendChild(divElement);
    })

    function onClick(event) {
        let paragraph = event.target.children[0];
        paragraph.style.display = 'inline';
    }
}