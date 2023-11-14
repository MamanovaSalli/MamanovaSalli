/// Задание 1

var list =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']


var result = {}

for (var i = 0; i < list.length; i++){
    var tag = list[i]

    if (result[tag]) {
        result[tag] = result[tag] + 1
    } else {
        result[tag] = 1
    }


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
