function search(input) {
    let matches = 0;
    let towns = document.getElementsByTagName('li');
    let searchText = document.getElementById('searchText');
    let result = document.getElementById('result');

    for (let i = 0; i < towns.length; i++) {
        if (towns[i].textContent.includes(searchText.value)) {
            matches++;
            towns[i].style.textDecoration = 'underline';
            towns[i].style.fontWeight = 'bold';
        }
    }

    result.textContent = `${matches} matches found`;
}
