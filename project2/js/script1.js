let increase = document.getElementById("btn1");
let Reset = document.getElementById("btn2");
let decrease = document.getElementById("btn3");

increase.addEventListener('click',function(){
    let value = document.getElementById("count");

    let newValue = parseInt(value.innerText)+1;
    value.textContent=newValue;
    value.style.color="green";
    

});

Reset.addEventListener('click',function(){
    let value = document.getElementById("count");
    value.innerText=0;
    value.style.color="#000038";
});

decrease.addEventListener('click',function(){
    let value = document.getElementById("count");

    let newValue = parseInt(value.innerText)-1;
    value.textContent=newValue;
    let color;
    if (newValue<0) {
        color = "red";
    } else {
        color="green";
    }
    value.style.color=color;
    

});
