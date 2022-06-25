window.addEventListener("load", solve);

function solve() {
    let makeEl = document.getElementById('make');
    let modelEl = document.getElementById('model');
    let yearEl = document.getElementById('year');
    let fuelEl = document.getElementById('fuel');
    let originalCostEl = document.getElementById('original-cost');
    let sellingPriceEl = document.getElementById('selling-price');
    let tbodyEl = document.getElementById('table-body');
    let carListUl = document.getElementById('cars-list');
    let totalProfitEl = document.getElementById('profit');
    document.getElementById('publish').addEventListener('click', onPublish);
    let totalProfit = 0;

    function onPublish(event) {

        event.preventDefault();
        const make = makeEl.value;
        const model = modelEl.value;
        const year = yearEl.value;
        const fuel = fuelEl.value;
        const originalCost = originalCostEl.value;
        const sellingPrice = sellingPriceEl.value;

        if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '') {
            return;
        }

        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${makeEl.value}</td>
          <td>${modelEl.value}</td>
          <td>${yearEl.value}</td>
          <td>${fuelEl.value}</td>
          <td>${originalCostEl.value}</td>
          <td>${sellingPriceEl.value}</td>
          <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
          </td>`;

        tbodyEl.appendChild(tr);

        makeEl.value = '';
        modelEl.value = '';
        yearEl.value = '';
        fuelEl.value = '';
        originalCostEl.value = '';
        sellingPriceEl.value = '';

        let editBtn = tr.querySelector('.edit');
        let sellBtn = tr.querySelector('.sell');

        editBtn.addEventListener('click', (e) => {
            makeEl.value = make;
            modelEl.value = model;
            yearEl.value = year;
            fuelEl.value = fuel
            originalCostEl.value = originalCost;
            sellingPriceEl.value = sellingPrice;
            tr.remove();
        });

        sellBtn.addEventListener('click', () => {
            tr.remove();
            let profit = sellingPrice - originalCost;
            totalProfit += profit;
            let li = document.createElement('li');
            li.className = 'each-list';
            li.innerHTML = `<span>${make} ${model}</span>
            <span>${year}</span>
            <span>${profit}</span>`;

            carListUl.appendChild(li);
            totalProfitEl.textContent = totalProfit.toFixed(2);
        })
    }
}

// 92/100