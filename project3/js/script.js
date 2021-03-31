const reviews = [
    {
        id:0,
        name:"Prakash Sundesha",
        job:"ios developer",
        img:"https://res.cloudinary.com/db1jh2osw/image/upload/v1616999711/samples/myImages/pk_hmg29h.png",
        info:'This is Prakash. He is the founder of "Banga Gang" and a self made ios developer at <b style="font-weight:700">Bitcot</b>. He is a passionate coder, dedicated worker and music enthusiastic person. You can visit <a href="#">link</a> to know more about him'

    },
   
    {
        id:1,
        name:"Laxman Seervi",
        job:"Business Consultant",
        img:"https://res.cloudinary.com/db1jh2osw/image/upload/v1617002467/samples/myImages/lucy_waa5gn.png",
        info:'This is Laxman also known as "<span style="font-weight:700">lucy</span>". He is a Business Man and an Entrepreneur, running a successful business named <a href="#">Ramdev Provisions</a> along with his joint venture capitalist "Sohanlal". He is expert in e-commerce & retail outlets and is a money magnet personality.You can visit <a href="#">link</a> to know more about him'


    },
    {
        id:2,
        name:"Ravi Shankar",
        job:"Java Developer",
        img:"https://res.cloudinary.com/db1jh2osw/image/upload/v1617002465/samples/myImages/pandey_rmmbds.png",
        info:'This is Ravi popularly known as "<span style="font-weight:700">Pandey</span>". He is full time java developer at <b style="font-weight:700">Cognizant</b>.He is more of a devotional person and innocent of all banga boys. You can visit <a href="#">link</a> to know more about him'

    },
    {
        id:3,
        name:"Rahul Shetia",
        job:"Web Developer",
        img:"https://res.cloudinary.com/db1jh2osw/image/upload/v1617037114/samples/myImages/shetu_ftufik.png",
        info:'This is Rahul also known as "<span style="font-weight:700">Shetia</span>. He made his debut in IT industry with <b style="font-weight:700">Amazon</b>. His keen interest is Hacking, gyming, and cricket. You can visit <a href="#">link</a> to know more about him'


    }, {
        id:1,
        name:"Vishal Singh",
        job:"Full Stack Developer",
        img:"https://res.cloudinary.com/db1jh2osw/image/upload/v1617001882/samples/myImages/vishal_ldhcix.png",
        info:'This is Vishal ,he named himself <span style="font-weight:700">Jarvis</span>. He is a fresh <abbr title="Full Stack Engineer"><b style="font-weight:700">FSE</b></abbr> at <b style="font-weight:700">Accenture</b>.You can visit <a href="#">link</a> to know more about him'


    }
    


];

const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const surprise = document.querySelector("#random-btn");

const img = document.getElementById("person-image");
const nameValue = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");



let count = 0;

window.addEventListener('DOMContentLoaded',function(){
    change();
});
forward.addEventListener('click',function(){
    if (count+1>4) {
        count=0;
    } else {
        count++; 
    }
     
    change();
});

backward.addEventListener('click',function(){
    if (count-1<0) {
        count=4;
    } else {
        count--; 
    }
     
    
    change(); 
});

surprise.addEventListener('click',function(){
    
    count = Math.floor(Math.random()*reviews.length);
    change(); 
});
function change()
{
    img.src=reviews[count].img;
    nameValue.innerText = reviews[count].name;
    job.innerText = reviews[count].job;
    info.innerHTML = reviews[count].info;

}

