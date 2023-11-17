var inform = ['name', 'John', 'last name', 'Black', 'age', '23'];
var result = {};

for (var i = 0; i < inform.length; i += 2) {
    var key = inform[i];
    var tag = inform[i + 1];
    result[key] = tag;
}

console.log(result);



//  задание 2
var arr = (numbers) => {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return console.log(sum / numbers.length)
}
arr([1, 9, 2, 4, 6, 8])


// задание 3
function getDataType (result){
    return typeof result;
}

console.log(getDataType(true))
console.log(getDataType('Hello world'))
console.log(getDataType(42))

// задание 4

var counterElement = document.getElementById('counter');
var incrementButton = document.getElementById('incrementBtn');
var decrementButton = document.getElementById('decrementBtn');


        var counterValue = 0;
        counterElement.textContent = counterValue;


        incrementButton.addEventListener('click', function() {
            counterValue++;
            counterElement.textContent = counterValue;
        });

        decrementButton.addEventListener('click', function() {
            counterValue--;
            counterElement.textContent = counterValue;
        });