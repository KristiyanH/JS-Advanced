window.addEventListener("load", solve);

function solve() {
    let titleEl = document.getElementById('post-title');
    let categoryEl = document.getElementById('post-category');
    let contentEl = document.getElementById('post-content');
    let publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', onPublish);
    let ul = document.getElementById('review-list');
    let clearBtn = document.getElementById('clear-btn');
    let publishUl = document.getElementById('published-list');
    clearBtn.addEventListener('click', onClear);

    function onPublish(event) {
        event.preventDefault();
        if (!titleEl.value || !categoryEl.value || !contentEl.value) {
            return;
        }

        let li = document.createElement('li');
        li.className = 'rpost';

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = titleEl.value;

        let categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = `Category: ${categoryEl.value}`;

        let contentParagraph = document.createElement('p');
        contentParagraph.textContent = `Content: ${contentEl.value}`;

        let editBtn = document.createElement('button');
        let approveBtn = document.createElement('button');

        editBtn.textContent = 'Edit';
        editBtn.className = 'action-btn edit';
        editBtn.addEventListener('click', onEdit);

        approveBtn.textContent = 'Approve';
        approveBtn.className = 'action-btn approve';
        approveBtn.addEventListener('click', onApprove);

        article.appendChild(h4);
        article.appendChild(categoryParagraph);
        article.appendChild(contentParagraph);
        li.appendChild(article);
        li.appendChild(approveBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);

        titleEl.value = '';
        categoryEl.value = '';
        contentEl.value = '';
    }

    function onEdit() {
        let headingInfo = document.querySelector('#review-list .rpost h4');
        let [categoryParagraph, contentParagraph] = Array.from(document.querySelectorAll('#review-list .rpost p'));
        let categoryText = categoryParagraph.textContent.substring(10, categoryParagraph.textContent.length - 1);
        let contentText = contentParagraph.textContent.substring(9, contentParagraph.textContent.length - 1);

        titleEl.value = headingInfo.textContent;
        categoryEl.value = categoryText;
        contentEl.value = contentText;

        for (const child of Array.from(ul.children)) {
            child.remove();
        }
    }

    function onApprove() {
        for (const child of Array.from(ul.children)) {
            publishUl.appendChild(child);
        }

        let [approveBtn, editBtn] = Array.from(document.querySelectorAll('#published-list .rpost button'));

        approveBtn.remove();
        editBtn.remove();
    }

    function onClear() {
        for (const child of Array.from(publishUl.children)) {
            child.remove();
        }
    }
}

// 75/100
