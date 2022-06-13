function addItem() {
    let input = document.getElementById('newItemText').value;
    let ul = document.querySelector('ul');

    let newElement = document.createElement('li');
    newElement.textContent = input;

    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]'
    deleteElement.href = "#";
    deleteElement.addEventListener('click', onDelete)

    newElement.appendChild(deleteElement);
    ul.appendChild(newElement);

    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}

