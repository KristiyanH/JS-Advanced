function deleteByEmail() {
    let tbody = document.querySelector('tbody');
    let input = document.querySelector('input[type="text"]').value;
    let result = document.getElementById('result');
    let isDeleted = false;

    for (const child of Array.from(tbody.children)) {
        if (child.innerHTML.includes(input)) {
            tbody.removeChild(child);
            result.textContent = 'Deleted.'
            isDeleted = true;
        }
    }

    if (!isDeleted) {
        result.textContent = 'Not found.'
    }
}