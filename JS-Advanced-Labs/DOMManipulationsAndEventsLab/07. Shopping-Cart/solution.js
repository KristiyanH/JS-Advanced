function solve() {
    Array.from(document.querySelectorAll('button')).forEach(x => x.addEventListener('click', onClick));
    let result = document.querySelector('textarea');
    let cart = {};

    function onClick(event) {
        if (event.target.className === 'add-product') {
            let currentEl = event.target.parentElement;
            let priceEl = Number(currentEl.nextElementSibling.innerHTML);
            let productName = currentEl.previousElementSibling.children[0].innerHTML;

            if (!cart[productName]) {
                cart[productName] = 0;
            }

            cart[productName] += priceEl;

            result.value += `Added ${productName} for ${priceEl.toFixed(2)} to the cart.\n`;
        } else {
            let totalPrice = Number(Object.values(cart).reduce((a, b) => a + b, 0));
            result.value += `You bought ${Object.keys(cart).join(', ')} for ${totalPrice.toFixed(2)}.`;

            Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
        }
    }
}