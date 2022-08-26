let rotators = Array.from(document.querySelectorAll('.rotator')); // создаю массив, и перебираю по элементам, на случай, если будет несколько ротаторов на странице

rotators.forEach(function(rotator) {

  let rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));

  function nextRotatorCase() {
  let activeRotatorCase = rotator.querySelector('.rotator__case_active');
  let i = rotatorCases.indexOf(activeRotatorCase);
  activeRotatorCase.classList.remove('rotator__case_active');
  if ((i+1) < rotatorCases.length) {
    rotatorCases[i + 1].classList.add('rotator__case_active');
  } else {
    rotatorCases[0].classList.add('rotator__case_active');
  }
  }

  setInterval(nextRotatorCase, 1000);

});