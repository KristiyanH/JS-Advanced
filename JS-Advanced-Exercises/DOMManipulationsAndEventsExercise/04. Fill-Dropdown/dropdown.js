function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let dropdown = document.getElementById('menu');

    let newElement = document.createElement('option');
    newElement.textContent = newItemText.value;
    newElement.value = newItemValue.value;
    dropdown.appendChild(newElement);

    newItemText.value = '';
    newItemValue.value = '';
}