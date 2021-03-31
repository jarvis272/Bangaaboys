const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");




btn.addEventListener('click', function () {
  
    var value = "#";
    for (let i = 0; i < 6; i++) {
        value += hex[getRandomValue()];
    }
    document.body.style.backgroundColor = value;
    color.textContent=value;
});

function getRandomValue() {
    return Math.floor(Math.random() * hex.length);
}