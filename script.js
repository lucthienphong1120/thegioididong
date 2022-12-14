const adressbtn = document.querySelector('#adress-form');
const adressclose = document.querySelector('#adress-close');

var index = 0;
// console.log(rightbtn);
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex";
});

adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none";
});

//slider 1
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgnumber = document.querySelectorAll('.slider-content-left-top img');
rightbtn.addEventListener('click', function(){
    index = index + 1;
    if(index > imgnumber.length - 1){
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
});
leftbtn.addEventListener('click', function(){
    index = index - 1;
    if(index <= 0){
        index = imgnumber.length - 1;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
});
// slider 2
const imgli = document.querySelectorAll('.slider-content-left-bottom li');

imgli.forEach(function(image, index){
    image.addEventListener('click', function(){
        removeactive();
        document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
        image.classList.add('active');
    });
});
function removeactive(){
    let imageactive = document.querySelector('.active');
    imageactive.classList.remove('active');
}
// slider 3
function imgAuto(){
    index =  index + 1;
    if(index > imgnumber.length - 1){
        index = 0;
    }
    removeactive();
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
    imgli[index].classList.add('active');
}
setInterval(imgAuto, 5000);
// Slider-product-phone
const rightbtntwo = document.querySelector('.fa-chevron-right-two');
const leftbtntwo = document.querySelector('.fa-chevron-left-two');

const imgnumbertwo = document.querySelectorAll('.slider-product-one-content-items');


rightbtntwo.addEventListener('click', function(){
    index = index + 1;
    if(index > imgnumbertwo.length - 1){
        index = 0;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + '%';
});
leftbtntwo.addEventListener('click', function(){
    index = index - 1;
    if(index < 0){
        index = imgnumbertwo.length - 1;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + '%';
});
//slider-product-watch
const rightbtnthree = document.querySelector('.fa-chevron-right-three');
const leftbtnthree = document.querySelector('.fa-chevron-left-three');

const imgnumberthree = document.querySelectorAll('.product-gallery-two-content-left-bottom-items');

rightbtnthree.addEventListener('click', function(){
    index = index + 1;
    if(index > imgnumberthree.length - 1){
        index = 0;
    }
    document.querySelector('.product-gallery-two-content-left-bottom-content').style.right = index * 100 + '%';
});
leftbtnthree.addEventListener('click', function(){
    index = index - 1;
    if(index < 0){
        index = imgnumberthree.length - 1;
    }
    document.querySelector('.product-gallery-two-content-left-bottom-content').style.right = index * 100 + '%';
});
