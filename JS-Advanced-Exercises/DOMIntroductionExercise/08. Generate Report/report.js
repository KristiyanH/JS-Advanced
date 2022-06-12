function generateReport() {
    let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let output = document.getElementById('output');
    let checkedObjects = [];
    let objects = [];
    let indexes = [];

    checkBoxes.forEach((checkbox, index) => {
        const obj = {
            name: checkbox.name,
            index: index
        };

        if (checkbox.checked) {
            checkedObjects.push(obj);
        }

    });

    let entries = Object.entries(checkedObjects);

    for (const entry of entries) {
        indexes.push(entry[1].index);
    }

    let rows = document.querySelectorAll('tbody tr');

    for (let i = 0; i < rows.length; i++) {
        let tds = rows[i].children;
        let tdsNeeded = [];
        let obj = {};
        for (const index of indexes) {
            tdsNeeded.push(tds[index].textContent.replace(/,/g, ''));
        }

        for (let j = 0; j < checkedObjects.length; j++) {
            let key = entries[j][1].name
            let value = tdsNeeded[j];
            obj[key] = value;
        }

        objects.push(obj);
    }

    output.value = JSON.stringify(objects);
}