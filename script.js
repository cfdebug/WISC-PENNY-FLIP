const FlipBtn = document.getElementById("flip-btn");
const ClearBtn = document.getElementById("clear-btn");

// Retrieve saved information if available
let headsCount = 0;


if (parseInt(localStorage.getItem("headsCount")) > 0){
    headsCount = parseInt(localStorage.getItem("headsCount"));
};

let tailsCount = 0;

if (parseInt(localStorage.getItem("tailsCount")) > 0){
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
};

// Initialize Scoreboard
ScoreBoard();

// Flip Button Click
FlipBtn.addEventListener("click",function(){
    let isHeads = Math.random() < 0.5;

    if(isHeads){
        document.getElementById("Penny").src = "./assets/images/penny-heads.jpg";
        document.getElementById("result").textContent = "You Flipped Heads!";
        headsCount++;
    } else {
    document.getElementById("Penny").src = "./assets/images/penny-tails.jpg";
    document.getElementById("result").textContent = "You Flipped Tails!";
    tailsCount++;
};
ScoreBoard();
});

// Clear Button Click
ClearBtn.addEventListener("click",function(){
    document.getElementById("Penny").src = "./assets/images/penny-heads.jpg";
    document.getElementById("result").textContent = "Let's Get Rolling!";

    headsCount = 0;
    tailsCount = 0;

    ScoreBoard();
});

// Scoreboard Function
function ScoreBoard() {
document.getElementById("data1").textContent = headsCount;
document.getElementById("data3").textContent = tailsCount;

let total = headsCount + tailsCount;
let headsPercent = 0;
let tailsPercent = 0;

if(total > 0){
headsPercent = Math.round(headsCount/total * 100);
tailsPercent = Math.round(tailsCount/total * 100);
};

document.getElementById("data2").textContent = headsPercent + "%";
document.getElementById("data4").textContent = tailsPercent + "%";

// Save counts to localstorage, even if the card has been cleared.
localStorage.setItem("headsCount", headsCount)
localStorage.setItem("tailsCount", tailsCount)

};