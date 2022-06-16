function solve() {
    let tBody = document.querySelector('tbody');
    let genBtn = document.querySelector('#exercise button').addEventListener('click', getData);
    let buyBtn = document.querySelector('#exercise > button:nth-child(6)').addEventListener('click', processData);
    let inputArea = document.querySelector('#exercise > textarea:nth-child(2)');
    let outputArea = document.querySelector('#exercise > textarea:nth-child(5)');

    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecoration = 0;

    function getData(event) {
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

    function processData(event) {
        
    }
}

