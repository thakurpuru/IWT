function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
} 
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){
        return "Cannot divided by 0";
    }
    return a/b;
}

console.log("Addition :",add(5,9));
console.log("Subtraction :",subtract(7,3));
console.log("Multiplication :",multiply(7,2));
console.log("Divide", divide(5,2));

const left=document.querySelector(".arrow.left");
const right=document.querySelector(".arrow.right");
const slider=document.querySelector(".slider");
const slide=document.querySelectorAll(".slide");
let slidernum=0;
let length=slide.length;
function slideshow(i){
    slider.style.transform=`translateX(-${i*600}px)`;
}
function nextSlide(){
    slidernum=(slidernum+1)%length;
    slideshow(slidernum);
}
function preslide(){
    slidernum=(slidernum-1+length)%lengt;
    slideshow(slidernum);
}

right.addEventListener('click',nextSlide);
left.addEventListener('click',preslide);