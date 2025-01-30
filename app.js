let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game is started!");
        start = true;
    }
})