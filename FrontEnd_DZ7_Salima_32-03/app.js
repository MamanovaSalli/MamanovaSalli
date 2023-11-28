const riddlesBlock = document.querySelector(".riddlesBlock")

const riddlesArray = [
    {
        riddle: 'Загадка 1: Какое слово написино правильно?',
         answer: 'Правильно'
    },
    {
        riddle: 'Загадка 2: Стоит богатый дом и бедный. Они горят. Какой дом будет тушить полиция?',
        answer: 'Полиция пожары не тушит, тушат пожары пожарные'
    },
    {
        riddle: 'Загадка 1: Вы заходите в тёмную кухню. В ней есть свеча, керосиновая лампа и газовая плита. Что вы зажжёте в первую очередь',
        answer: 'Спичку'
    },
    {
        riddle: 'Загадка 1: Как может брошенное яйцо пролететь три метра и не разбиться?',
        answer: 'Нужно бросить яйцо на четыре метра, тогда первые три метра оно пролетит целым'
    },
    {
        riddle: 'Загадка 1: Если пять кошек ловят пять мышей за пять минут, то сколько времени нужно одной кошке, чтобы поймать одну мышку?',
        answer: 'Пять минут'
    },
    {
        riddle: 'Загадка 1: Один оборот вокруг Земли спутник делает за 1 час 40 минут, а другой — за 100 минут. Как это может быть?',
        answer: '100 минут – это и есть 1 час 40 минут'
    }
]

riddlesArray.forEach(riddle => {
    // Блок для загадки, ответа и кнопки
    const mystery = document.createElement('div')
    mystery.setAttribute('class','mystery')

    // Текст загадки
    const text = document.createElement("p")
    text.setAttribute("class", "text")
    text.innerText = riddle.riddle;

    // Ответ загадки
    const answer = document.createElement("p")
    answer.setAttribute("class", "answer hide")
    answer.innerText = riddle.answer

    // Кнопка для показа или скрытия ответа
    const button = document.createElement("button")
    button.setAttribute("class", "showHideBtn")
    button.innerText = "Показать ответ"

    // Ложим текст, ответ и кнопку в блок mystery
    mystery.append(text, answer, button)

    // В блок riddlesBlock ложим наш блок mystery, в котором есть текст, ответ и кнопка
    riddlesBlock.append(mystery)

    // При нажатии на кнопку появляется либо скрывается ответ

    let shown = false

    button.onclick = () => {
        if (shown) {
            button.innerText = "Показать ответ"
            shown = false
        } else {
            button.innerText = "Скрыть ответ"
            shown = true
        }

        answer.classList.toggle("hide")
    }
})
