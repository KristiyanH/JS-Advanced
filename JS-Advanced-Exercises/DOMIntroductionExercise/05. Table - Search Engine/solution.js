function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let rows = document.querySelectorAll('tbody tr');
    let searchText = document.getElementById('searchField');

    function onClick() {
        for (const row of rows) {
            row.classList.remove('select');
            if (row.innerHTML.includes(searchText.value)) {
                row.className = 'select';
            }
        }
    }
}