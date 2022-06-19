function solve() {
    const input = {
        taskName: document.getElementById('task'),
        description: document.getElementById('description'),
        dueDate: document.getElementById('date')
    };
    const [_, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        let article = document.createElement('article');
        let div = createElement('div', '', 'flex');
        article.appendChild(createElement('h3', input.taskName.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.dueDate.value}`));

        const startButton = createElement('button', 'Start', 'green')
        const deleteButton = createElement('button', 'Delete', 'red')
        const finishButton = createElement('button', 'Finish', 'orange');

        div.appendChild(startButton);
        div.appendChild(deleteButton);

        startButton.addEventListener('click', moveToProgress);
        deleteButton.addEventListener('click', deleteTask);
        finishButton.addEventListener('click', moveToComplete);

        article.appendChild(div);
        openSection.appendChild(article);

        Object.values(input).forEach(x => x.value = '');

        function moveToProgress() {
            startButton.remove();
            div.appendChild(finishButton);

            openSection.removeChild(article);
            inProgressSection.appendChild(article);
        }

        function moveToComplete() {
            div.remove();
            inProgressSection.removeChild(article);
            completeSection.appendChild(article);
        }

        function deleteTask() {
            article.remove();
        }
    }

    function createElement(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}