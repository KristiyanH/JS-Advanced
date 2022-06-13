function deleteByEmail() {
    let tbody = document.querySelector('tbody');
    let input = document.querySelector('input[type="text"]').value;

    let children = tbody.children;

    for (const child of children) {
        if (child.innerHTML.includes(input)) {
            tbody.removeChild(child);
        }
    }

    document.querySelector('input[type="text"]').value = '';
}