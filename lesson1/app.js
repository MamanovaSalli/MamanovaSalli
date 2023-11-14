
var login = prompt('Логин')
var password= prompt('Пароль')

var answer1 = prompt('Повторно ввести Логин')
var answer2 = prompt('Повторно ввести Пароль')

if (login === answer1 && password === answer2){
    alert('Удачно ввели!')

} else {
    alert('Ввели неправильный логин или пароль')
}

var value1 = prompt('напишите первое слово ')
var value2 = prompt('напишите второе слово')
if (value1 > value2){
    alert('первое слово больше, чем второе слово ')
}else if (value1 < value2){
    alert('второе слово больше, чем первое слово')
}else{
    alert('равно')
}

