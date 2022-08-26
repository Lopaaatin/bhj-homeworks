let reveals = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
  reveals.forEach(function(reveal) {
    if (reveal.getBoundingClientRect().top < window.innerHeight) {
      reveal.classList.add('reveal_active');
    }
  });
});
