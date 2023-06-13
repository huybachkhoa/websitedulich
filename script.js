const adressbtn = document.querySelector('#adress-form') 
const adressclose = document.querySelector('#adress-close') 

adressbtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click" , function(){
    document.querySelector('.adress-form').style.display="none"
})

// ------------------slide
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
let index =0 ;
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgNuber.length)
rightbtn.addEventListener("click" , function(){
    index+=1;
    if (index > imgNuber.length-1){
index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})
leftbtn.addEventListener("click" , function(){
    index -= 1;
    if (index < 0){
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})
// ------------------------------------------slide--1--------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')

// console.log(imgNuberLi.length);


    imgNuberLi.forEach(function(image , index){
        image.addEventListener("click", function(){
            removeactive ()
            document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
            image.classList.add("active")   
        })
    })

function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// ------------slider 2 --------------------
let imgactive = document.querySelector('.active')
function imgAuto(){
 
    index +=1;
    if (index > imgNuber.length-1){
        index = 0;
            }  
            console.log(index) 
            // imgactive.classList.add("active") 
            removeactive ()
            document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
            // imgactive.classList.remove("active")
            imgNuberLi[index].classList.add("active")
        }

// document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
setInterval(imgAuto, 5000)
