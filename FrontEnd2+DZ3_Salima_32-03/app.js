// Задание 1


var list =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'] // это ваш список тегов


var result = {} // Это пустой объект, который будем заполнять
// var arrayList =[]

for (var i = 0; i < list.length; i++){ // это цикл
    var tag = list[i]

    if (result[tag]) {
        result[tag] = result[tag] + 1
    } else {
        result[tag] = 1
    }

    // result[tag] = (result[tag] ? result[tag] + 1 : 1)


    // if (list[i][0] === 'l' || list[i][0] === 'd' || list[i][0] === 'p'){
    //     console.log(list[i])
    //     arrayList.push(list[i][0])
    // }
}

console.log(result)

// Задание 2

var starbucks = {
    coffee: {
        black: 'just coffee',
        americano: 'espresso, hot water',
        latte: 'espresso, steamed milk',
        espresso: '1oz Espresso',
        cappuccino: 'espresso, steamed milk, foam'
    },
    tea: {
        blackTea: 'Classic',
        greenTea: 'whit Chamomile',
        redTea: 'whit Raspberries',
        whiteTea: 'whit Mango',
        fruitsTea: 'whit Raspberries, Lemon, Passion fruit, Orange'
    }
}
var order = prompt('Ваш заказ: ')
order = order.toLowerCase()

if (Object.hasOwn(starbucks.coffee, order) || Object.hasOwn(starbucks.tea, order)) {
    console.log("Заказ принят!")
} else {
    console.error("Нет в меню!")
}
