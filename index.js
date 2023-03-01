////////////// Model
let todos = [{
    title: 'todo title1',
    dueDate: '2023-04-14',
    id: 'id45678'
}, {
    title: 'todo title2',
    dueDate: '2023-02-31',
    id: 'id456788'
}]
// creates todo
function createTodo(title, dueDate) {
    todo = {
        title: title,
        dueDate: dueDate,
        id: '' + new Date().getTime()
    }
    todos.push(todo);
}

// deletes totdo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    })
}
////////////////// View
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

/////////// Controler
function addTodo() {
    const title = document.getElementById('todoTitle');
    const dueDate = document.getElementById('date');
    createTodo(title.value, dueDate.value);
    render();
    title.value = ''
    dueDate.value = ''
}

function deleteTodo(e) {
    const idToDelete = e.target.id;
    removeTodo(idToDelete)
    render()
}