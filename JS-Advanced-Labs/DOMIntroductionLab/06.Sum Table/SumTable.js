function sumTable() {
    let tds = document.querySelectorAll('td:nth-child(2n)');
    let sum = 0;
    let sumEl = document.getElementById('sum');
    for (let i = 0; i < tds.length - 1; i++) {
        sum += Number(tds[i].textContent);
    }

    sumEl.textContent = sum;
}