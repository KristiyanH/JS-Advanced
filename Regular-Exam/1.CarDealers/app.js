window.addEventListener("load", solve);

function solve() {
    const input = {
        makeEl: document.getElementById('make'),
        modelEl: document.getElementById('model'),
        yearEl: document.getElementById('year'),
        fuelEl: document.getElementById('fuel'),
        originalCostEl: document.getElementById('original-cost'),
        sellingPriceEl: document.getElementById('selling-price')
    }
    const elements = {
        tbodyEl: document.getElementById('table-body'),
        carListUl: document.getElementById('cars-list'),
        totalProfitEl: document.getElementById('profit')
    }
    document.getElementById('publish').addEventListener('click', onPublish);
    let totalProfit = 0;

    function onPublish(event) {
        event.preventDefault();
        const make = input.makeEl.value;
        const model = input.modelEl.value;
        const year = input.yearEl.value;
        const fuel = input.fuelEl.value;
        const originalCost = input.originalCostEl.value;
        const sellingPrice = input.sellingPriceEl.value;

        if (!make || !model || !year || !fuel || !originalCost || !sellingPrice) {
            return;
        }

        let tr = document.createElement('tr');
        tr.className = 'row';
        tr.innerHTML = `<td>${make}</td>
          <td>${model}</td>
          <td>${year}</td>
          <td>${fuel}</td>
          <td>${originalCost}</td>
          <td>${sellingPrice}</td>
          <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
          </td>`;

        elements.tbodyEl.appendChild(tr);

        for (const inputKey in input) {
            input[inputKey].value = ''
        }

        let editBtn = tr.querySelector('.edit');
        let sellBtn = tr.querySelector('.sell');

        editBtn.addEventListener('click', () => {
            input.makeEl.value = make;
            input.modelEl.value = model;
            input.yearEl.value = year;
            input.fuelEl.value = fuel
            input.originalCostEl.value = originalCost;
            input.sellingPriceEl.value = sellingPrice;
            tr.remove();
        });

        sellBtn.addEventListener('click', () => {
            let profit = sellingPrice - originalCost;
            totalProfit += profit;
            let li = document.createElement('li');
            li.className = 'each-list';
            li.innerHTML = `<span>${make} ${model}</span>
            <span>${year}</span>
            <span>${profit}</span>`;

            tr.remove();
            elements.carListUl.appendChild(li);
            elements.totalProfitEl.textContent = totalProfit.toFixed(2);
        })
    }
}

// 92/100