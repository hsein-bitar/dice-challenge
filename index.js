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

let refreshDice = () => {
    refresh.removeEventListener('click', refreshHandler);
    setTimeout(() => {
        refresh.innerText = "Refresh Me"
        refresh.addEventListener('click', refreshHandler);
    }, wait_time);
    sound.play();
    random_num1 = Math.floor(Math.random() * 6) + 1;
    random_num2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${random_num1}.png`
    dice2.src = `images/dice${random_num2}.png`
    if (random_num1 > random_num2) {
        refresh.innerText = "🚩Play1 Wins!"
    } else if (random_num1 < random_num2) {
        refresh.innerText = "Play2 Wins!🚩"
    } else {
        refresh.innerText = "Draw!"
    }
}

refresh.addEventListener('click', refreshHandler);
window.onload = refreshDice;

