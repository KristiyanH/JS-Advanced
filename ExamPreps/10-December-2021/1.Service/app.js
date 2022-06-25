window.addEventListener('load', solve);

function solve() {
    let descriptionEl = document.getElementById('description');
    let clientNameEl = document.getElementById('client-name');
    let clientPhoneEl = document.getElementById('client-phone');
    let productEl = document.getElementById('type-product');
    let receivedSection = document.getElementById('received-orders');
    let completedSection = document.getElementById('completed-orders');

    document.querySelector('button[type="submit"]').addEventListener('click', onSend);

    function onSend(event) {
        event.preventDefault();
        if (!descriptionEl.value || !clientNameEl.value || !clientPhoneEl.value) {
            return;
        }

        //create div element
        let div = document.createElement('div');
        div.className = 'container';

        //create div children
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productEl.value}`;
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientNameEl.value}, ${clientPhoneEl.value}`;
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionEl.value}`;
        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start repair';
        startBtn.className = 'start-btn';
        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });
        let finishBtn = document.createElement('button');
        finishBtn.addEventListener('click', () => {
            div.removeChild(startBtn);
            div.removeChild(finishBtn);
            completedSection.appendChild(div);
            document.querySelector('button[class="clear-btn"]').addEventListener('click', () => {
                div.remove();
            })
        })
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        //append children to the div
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        //append the div to the section
        receivedSection.appendChild(div);
    }
}

// 90/100