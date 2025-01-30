let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'green', 'purple'];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game is started!");
        start = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function chekAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over, Your score was <b>${level}<b> <br>Press any key to start!`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    chekAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}