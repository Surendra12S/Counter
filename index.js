const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("labels");

let count = 0;
increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreasebtn.onclick=function(){
    count--;
    countLabel.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}