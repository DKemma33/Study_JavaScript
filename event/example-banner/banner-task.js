/* banner-task.html */

const banner = document.querySelector("div.banner");
const prev = document.querySelector("div.prev");
const next = document.querySelector("div.next");
const dots = document.querySelectorAll("div.dot");
let count = 1;
let check = true;
let clickCheck = false;
let temp;

let slide = setInterval(() => autoSlide(), 2000);
changeButtonStyle();

function autoSlide(){
    check = false;
    banner.style.transform = `translate(${-850 * ++count}px)`;
    banner.style.transition = "transform 0.7s";
    if(count == 6){
        setTimeout(() => {
            banner.style.transform = "translate(-850px)";
            banner.style.transition = "transform 0s";
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => check = true, 700);
}

function autoSlideReverse(){
    check = false;
    banner.style.transform = `translate(${-850 * --count}px)`;
    banner.style.transition = "transform 0.7s";
    if(count == 0){
        setTimeout(() => {
            banner.style.transform = "translate(-4250px)";
            banner.style.transition = "transform 0s";
        }, 700);
        count = 5;
    }
    changeButtonStyle();
    setTimeout(() => check = true, 700);
}

prev.addEventListener("click", function(){
    if(!check){return;}
    clearInterval(slide);
    autoSlideReverse();
    slide = setInterval(() => autoSlide(), 2000);
});

next.addEventListener("click", function(){
    if(!check){return;}
    clearInterval(slide);
    autoSlide();
    slide = setInterval(() => autoSlide(), 2000);
});

function changeButtonStyle(){
    if(temp){temp.style.background = "none";}
    temp = dots[count-1];
    dots[count-1].style.background = "#313131";
}

dots.forEach((dot) => {
    dot.addEventListener("mouseover", () => {
        clickCheck = dot.style.background != "none";
        dot.style.background = "#313131";
    });
    dot.addEventListener("mouseout", () => {
        if(clickCheck){return;}
        dot.style.background = "none";
    });
    dot.addEventListener("click", () => {
        clickCheck = true;
        clearInterval(slide);
        count = dot.classList[1];
        banner.style.transform = `translate(${-850 * count}px)`;
        banner.style.transition = "transform 0.7s";
        changeButtonStyle();
        slide = setInterval(() => autoSlide(), 2000);
    });
})