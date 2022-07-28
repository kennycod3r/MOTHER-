let pricing = document.getElementById("pricingLink");
let dropDown = document.getElementById("dropDown");
let drop = false;
let X = document.getElementById("X");
const sideNav = document.getElementById("links2");


pricing.addEventListener('mouseover', display);
dropDown.addEventListener('mouseover', display);
pricing.addEventListener('mouseout', hide);
dropDown.addEventListener('mouseout', hide);
X.addEventListener('click', close);

window.addEventListener("scroll", navChange);

function navChange(){
    if(window.scrollY >= 100){
        sideNav.classList.add("fixed");
    }  
    else{
        sideNav.classList.remove("fixed");
    }
}

function display(){
    drop = true;
    dropDown.style.display = "block";  
    dropDown.style.transition = "100ms";
    dropDown.addEventListener("mouseenter", () => {
        dropDown.style.display = "block"; 
    })  
}
function hide(){
    dropDown.addEventListener('mouseout',() => {
        dropDown.style.display = "none";
    })
    dropDown.style.display = "none";
    if(drop){
      // display();
    }
}
function close(){
    sideNav.style.display = "none";
}