let sliderItems = Array.from(document.querySelectorAll('.slider__item'));

let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');
let activeSlideNumber = sliderItems.indexOf(document.querySelector('.slider__item_active'))
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
sliderDots[activeSlideNumber].classList.add('slider__dot_active');

next.addEventListener('click', function() {
   if ((activeSlideNumber + 1) < sliderItems.length) {
    sliderItems[activeSlideNumber].classList.remove('slider__item_active');
    sliderItems[(activeSlideNumber + 1)].classList.add('slider__item_active');
    activeSlideNumber +=1;
    // console.log(activeSlideNumber);
  } 
  else {
      sliderItems[activeSlideNumber].classList.remove('slider__item_active');
      sliderItems[0].classList.add('slider__item_active');
      activeSlideNumber = 0;
      // console.log(activeSlideNumber);
  }
  sliderDots.forEach(function(item) {
    item.classList.remove('slider__dot_active');
  })
  sliderDots[activeSlideNumber].classList.add('slider__dot_active');
});

prev.addEventListener('click', function() {
  if ((activeSlideNumber - 1) >= 0) {
   sliderItems[activeSlideNumber].classList.remove('slider__item_active');
   sliderItems[(activeSlideNumber - 1)].classList.add('slider__item_active');
   activeSlideNumber -=1;
  //  console.log(activeSlideNumber);
 } 
 else {
     sliderItems[activeSlideNumber].classList.remove('slider__item_active');
     sliderItems[(sliderItems.length -1)].classList.add('slider__item_active');
     activeSlideNumber = (sliderItems.length -1);
    //  console.log(activeSlideNumber);
 }
  sliderDots.forEach(function(item) {
    item.classList.remove('slider__dot_active');
  })
 sliderDots[activeSlideNumber].classList.add('slider__dot_active');
});


for (let i = 0; i < sliderDots.length; i++) {
sliderDots[i].addEventListener('click', function() {
  sliderDots[activeSlideNumber].classList.remove('slider__dot_active');
  sliderDots[i].classList.add('slider__dot_active');
  sliderItems[activeSlideNumber].classList.remove('slider__item_active');
  sliderItems[i].classList.add('slider__item_active');
  activeSlideNumber = i;
});
};