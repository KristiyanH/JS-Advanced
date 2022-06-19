function getArticleGenerator(articles) {
    let div = document.getElementById('content');

    return function () {
        if (articles.length > 0) {
            let newArticle = document.createElement('article');
            newArticle.textContent = articles.shift();
            div.appendChild(newArticle);
        }
    }
}
