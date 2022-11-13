const nextButton = document.querySelector(".quotes__arrow-right");
const previousButton = document.querySelector(".quotes__arrow-left");
const slidesHolder = document.querySelector(".quotes__slides");
const allSlides = document.querySelectorAll(".quotes__slide");
const dots = document.querySelectorAll('.quotes__arrow-dot');
const leftArrow = document.querySelector('.quotes__arrow-left-icon')
const rightArrow = document.querySelector('.quotes__arrow-right-icon')

let steps = 0;



nextButton.addEventListener("click", () => {
  if (steps < allSlides.length - 1) {
    steps = steps + 1;
    slidesHolder.style.transform += "translateX(-33.33%)";
    console.log(steps);

    dots.forEach((dot, index) => {
      dot.classList.remove('quotes__arrow-dot--active')
    })
    dots[steps].classList.add('quotes__arrow-dot--active')
  }
  
  if (steps === 0) {
    leftArrow.classList.add('quotes__arrow-left-icon--inactive')
  } else {
    leftArrow.classList.remove('quotes__arrow-left-icon--inactive')
  }

  if (steps === allSlides.length - 1) {
    rightArrow.classList.add('quotes__arrow-right-icon--inactive')
  }else {
    rightArrow.classList.remove('quotes__arrow-right-icon--inactive')
  }

});

previousButton.addEventListener("click", () => {
  if (steps >= 1) {
    steps = steps - 1;
    slidesHolder.style.transform += "translateX(33.33%)";

    dots.forEach((dot, index) => {
      dot.classList.remove('quotes__arrow-dot--active')
    })
    dots[steps].classList.add('quotes__arrow-dot--active')
  }

  if (steps === 0) {
    leftArrow.classList.add('quotes__arrow-left-icon--inactive')
  } else {
    leftArrow.classList.remove('quotes__arrow-left-icon--inactive')
  }

  if (steps === allSlides.length - 1) {
    rightArrow.classList.add('quotes__arrow-right-icon--inactive')
  }else {
    rightArrow.classList.remove('quotes__arrow-right-icon--inactive')
  }
});


