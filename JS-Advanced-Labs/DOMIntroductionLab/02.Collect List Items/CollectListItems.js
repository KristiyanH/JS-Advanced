function extractText() {
    let ul = document.getElementById('items');
    let items = ul.children;
    let result = document.getElementById('result');

    for (let i = 0; i < items.length; i++) {
        result.textContent += items[i].textContent + '\n';
    }
}