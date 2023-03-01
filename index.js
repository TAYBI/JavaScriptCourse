////////////// Model
let todos = [{
    title: 'todo title1',
    dueDate: '2023-04-14',
    id: 'id45678',
    isDone: false
}, {
    title: 'todo title2',
    dueDate: '2023-02-31',
    id: 'id456788',
    isDone: true
}]
// creates todo
function createTodo(title, dueDate) {
    todo = {
        title: title,
        dueDate: dueDate,
        id: '' + new Date().getTime(),
        isDone: false
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
// marke Todo as done
function markeTodoAsDone(checked, id) {
    todos.forEach(todo => {
        if (checked && todo.id === id) {
            todo.isDone = checked
        }
    });
}
////////////////// View
function render() {
    // getting the to dos container
    const todosContainer = document.getElementById('todo-list');
    todosContainer.innerHTML = '';
    // adding todos to their container
    todos.forEach((element) => {
        const deleteButton = document.createElement('button');
        const checkbox = document.createElement('input')
        const child = document.createElement('div');

        deleteButton.innerText = 'delete';
        deleteButton.id = element.id;
        deleteButton.style = "margin-left: 10px";
        deleteButton.onclick = deleteTodo;

        checkbox.type = 'checkbox'
        checkbox.style = "margin-right: 10px";
        checkbox.onchange = todoDone;
        checkbox.id = element.id;
        checkbox.checked = element.isDone

        child.innerHTML = element.title + " " + element.dueDate;
        child.id = element.id;
        child.appendChild(deleteButton)
        child.prepend(checkbox)

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

function todoDone(e) {
    const checkbox = e.target
    markeTodoAsDone(checked, id)
    console.log(checkbox.checked, checkbox.id);
}