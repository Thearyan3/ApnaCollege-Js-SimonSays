let gameSeq = [];
let userSeq = [];



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

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


let btns = ['yellow', 'red', 'green', 'purple'];
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;


    let randIndx = Math.floor(Math.random() * 3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    btnFlash(randBtn);
}