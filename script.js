var menuIcon= document.querySelector(".menu-icon");
var sidebar= document.querySelector(".sidebar");
var container= document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList/toggle("small-sidebar"); 
    container.classList.toggle("large-container");
}

/*-----------------------------automatic slidhow ka code -------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*-----------------------------manual slidhow ka code -------------------------


let slideIndexa = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndexa += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexa = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexa = 1}
  if (n < 1) {slideIndexa = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexa-1].style.display = "block";
  dots[slideIndexa-1].className += " active";
}*/