function changeColor() {
    const square = document.getElementById('square');
    const randomColor = getRandomColor();

    square.style.backgroundColor = randomColor;
    square.textContent = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABDEFC';
    let startColor = '#';
    for (let i = 0; i < 6; i++) {

        startColor += letters[Math.floor(Math.random() * 16)];

    }

    return startColor;
}
