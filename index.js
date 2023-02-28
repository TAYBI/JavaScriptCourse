// Ex 5 /////////////////////
//1-
// document.getElementById('btn').addEventListener("click", function () {
//     document.title = 'New Title'
// }, false)
//
// todos = document.getElementsByTagName('p')
// todosText = []
// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i].innerHTML;
//     todosText.push(element)
// }
//2-
// for (let i = 0; i < todos.length; i++) {
//     todos[i].innerHTML = todosText[todos.length - i - 1];
// }
//--------------------------------------------------------
// EX7 ////////////////////////
//1-
// words = ['word1', 'word2', 'word3', 'word4']
// function toUpper(arg) {
//     arg.forEach(element => {
//         console.log(element.toUpperCase());
//     });
// }
// toUpper(words)
//2-
// words = ['word1', 'word2', 'word3']
// function arrayDouble(array) {
//     array.forEach(element => {
//         array.push(element)
//     });
// }
// arrayDouble(words)
// console.log(words);
//--------------------------------------------------------
// EX8 ////////////////////////
// button = document.createElement('button')
// button.innerHTML = "click"
// button.addEventListener("click", function () {
//     button.innerText = 'done'
// }, false)
// document.body.appendChild(button)

const todos = [{
    title: 'todo title1',
    dueDate: '2023-04-14',
    id: 'id45678'
}, {
    title: 'todo title2',
    dueDate: '2023-02-31',
    id: 'id456788'
}]

function render() {
    // getting the to dos container
    const todosContainer = document.getElementById('todo-list');
    todosContainer.innerHTML = '';
    // adding todos to their container
    todos.forEach((element) => {
        deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.id = element.id;
        deleteButton.style = "margin-left: 10px";
        deleteButton.onclick = deleteTodo

        const child = document.createElement('p');
        child.innerHTML = element.title + " " + element.dueDate;
        child.appendChild(deleteButton)
        todosContainer.appendChild(child);
    });
}

render()

function addTodo() {
    const title = document.getElementById('todoTitle').value;
    const dueDate = document.getElementById('date').value;
    todo = {
        title: title,
        dueDate: dueDate,
        id: new Date().getTime()
    }
    todos.push(todo);
    render();
}

function deleteTodo(e) {
    console.log(e.target.id);
    console.log('delete');
}