function addItem() {
    let input = document.getElementById('newItemText').value;
    let ul = document.querySelector('ul');

    let newElement = document.createElement('li');
    newElement.textContent = input;
    ul.appendChild(newElement);

    document.getElementById('newItemText').value = '';
}