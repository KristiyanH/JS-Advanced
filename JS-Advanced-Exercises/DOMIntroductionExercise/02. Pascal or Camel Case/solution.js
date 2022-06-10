function solve(text, casing) {
    text = document.getElementById('text').value;
    casing = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    function camelCaseConvert(text) {
        return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    function pascalCaseConvert(text) {
        return text.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()).replace(/\s+/g, '');
    }

    if (casing == 'Camel Case') {
        let textResult = camelCaseConvert(text);
        result.textContent = textResult;

    } else if (casing == 'Pascal Case') {
        let textResult = pascalCaseConvert(text);
        result.textContent = textResult;
    } else {
        result.textContent = 'Error!';
    }

}