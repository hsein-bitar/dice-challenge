let refresh = document.getElementById('refresh');
let dice1 = document.querySelector('.img1');
let dice2 = document.querySelector('.img2');
let sound = new Audio('sounds/yellow.mp3');

let random_num1;
let random_num2;
let wait_time = 1500;


let refreshHandler = (e) => {
    e.preventDefault();
    refreshDice();
}

let draw = () => {
    refresh.innerText = "Draw!"
    refresh.removeEventListener('click', refreshHandler);
    setTimeout(() => {
        refresh.innerText = "Refresh Me"
        refresh.addEventListener('click', refreshHandler);
    }, wait_time)
}

let playerWon = (one, two) => {
    if (one > two) {
        refresh.innerText = "🚩Play1 Wins!"
        refresh.removeEventListener('click', refreshHandler);
        setTimeout(() => {
            refresh.innerText = "Refresh Me"
            refresh.addEventListener('click', refreshHandler);
        }, wait_time)
    } else {
        refresh.innerText = "Play2 Wins!🚩"
        refresh.removeEventListener('click', refreshHandler);
        setTimeout(() => {
            refresh.innerText = "Refresh Me"
            refresh.addEventListener('click', refreshHandler);
        }, wait_time)
    }
}

let refreshDice = () => {
    sound.play();
    random_num1 = Math.floor(Math.random() * 6) + 1;
    random_num2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${random_num1}.png`
    dice2.src = `images/dice${random_num2}.png`
    random_num1 == random_num2 ? draw() : playerWon(random_num1
        , random_num2)
}

refresh.addEventListener('click', refreshHandler);
window.onload = refreshDice;

