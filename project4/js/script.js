const toggleBtn = document.querySelector(".nav-toggle");
let listDisplay = document.getElementById("list-tabs");
let social = document.getElementById("social");


window.addEventListener("DOMContentLoaded",function(){
    listDisplay.classList.add("visibility");
    social.classList.add("visibility");
});
    


toggleBtn.addEventListener('click',function(){
    let visible = listDisplay.style.display;
    listDisplay.classList.toggle("visibility");
    social.classList.toggle("visibility");

});