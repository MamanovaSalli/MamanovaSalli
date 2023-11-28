//todolist

const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(div)
    })
    div.appendChild(deleteButton)

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'

    div.appendChild(editButton)


    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', () => {
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    editButton.addEventListener("click", function () {
        const editText = prompt("Отредактируйте свою задачу:")
        if (editText !== "") {
            text.innerText = editText
        }

    })

    todoList.prepend(div)
    input.value = ''
}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}
