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

todos = ['todo1', 'todo2', 'todo3']

function render() {
    // getting the to dos container
    let todosContainer = document.getElementById('todo-list')
    todosContainer.innerHTML = ''
    // adding todos to their container
    todos.forEach((element) => {
        let child = document.createElement('p');
        child.innerHTML = element;
        todosContainer.appendChild(child);
    });

}

render()

function addTodo() {
    let title = document.getElementById('todoTitle');
    todos.push(title.value);
    render();
    title.value = '';
}
