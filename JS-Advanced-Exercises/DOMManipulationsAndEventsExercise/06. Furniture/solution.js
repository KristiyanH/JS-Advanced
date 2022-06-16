function solve() {
    document.querySelector('#exercise button').addEventListener('click', getData);
    document.querySelector('#exercise > button:nth-child(6)').addEventListener('click', processData);

    let tBody = document.querySelector('tbody');
    let inputArea = document.querySelector('#exercise > textarea:nth-child(2)');
    let outputArea = document.querySelector('#exercise > textarea:nth-child(5)');

    let names = [];
    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecoration = 0;

    function getData() {
        let data = (JSON.parse(inputArea.value));

        data.forEach(furniture => {
            tBody.innerHTML += `<tr>
          <td><img src=${furniture.img}></td>
          <td><p>${furniture.name}</p></td>
          <td><p>${furniture.price}</p></td>
          <td><p>${furniture.decFactor}</p></td>
          <td><input type="checkbox"/></td>
          </tr>`
        })

    }

    function processData() {
        let checked = document.querySelectorAll('input[type="checkbox"]:checked');

        for (let i = 0; i < checked.length; i++) {
            let row = checked[i].parentElement.parentElement;
            let children = row.children;
            let name = children[1].textContent;
            let price = Number(children[2].textContent);
            let decFactor = Number(children[3].textContent);

            totalPrice += price;
            names.push(name);
            averageDecoration += decFactor;
        }

        let paragraph1 = `Bought furniture: ${names.join(', ')}`;
        let paragraph2 = `Total price: ${totalPrice.toFixed(2)}`;
        let paragraph3 = `Average decoration factor: ${(averageDecoration / names.length)}`

        outputArea.textContent += `${paragraph1}\n${paragraph2}\n${paragraph3}`;
    }
}

