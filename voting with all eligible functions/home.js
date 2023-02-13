const slides = document.querySelectorAll(".slide");

let currentSlide = 1;

function firstSlide() {
  // Initially slide[0] will be shown when the page opens
  slides[0].classList.add("active");
}

function changeSlide() {
  // removing active from all slide first
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  //Then,Adding active class to particular slide - in this case starts from slide[1]
  slides[currentSlide].classList.add("active");
  // incrementing currentSlide, So that during the next call of this changeSlide() function after 3 sec, the active class will be added to next slide
  currentSlide = (currentSlide + 1) % slides.length;
}

firstSlide();

setInterval(changeSlide, 3000);

// Changing color of body - Color Picker
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", (e) => {
  document.body.style.backgroundColor = e.target.value;
});