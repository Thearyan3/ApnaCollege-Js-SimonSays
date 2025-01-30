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
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameFlash(randBtn);
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}