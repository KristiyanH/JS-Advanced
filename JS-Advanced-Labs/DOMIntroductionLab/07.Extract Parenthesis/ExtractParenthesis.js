function extract(content) {
    const regex = new RegExp(/\(([^()]*)\)/g);
    let text = document.getElementById(content).textContent;
    let result = [];

    let match = regex.exec(text);

    while (match) {
        result.push(match[1]);
        match = regex.exec(text);
    }

    return result.join('; ');
}