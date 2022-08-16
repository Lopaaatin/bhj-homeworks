let dropdowns = Array.from(document.getElementsByClassName('dropdown'));

for (let i = 0; i < dropdowns.length; i++) {
  let uls = Array.from(dropdowns[i].getElementsByTagName('ul'));
  let values = Array.from(dropdowns[i].getElementsByClassName('dropdown__value'));
  let links = Array.from(uls[0].getElementsByClassName('dropdown__link'));

  values[0].addEventListener('click', function() {
    uls[0].classList.toggle('dropdown__list_active');
  })
  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
      values[0].textContent = link.textContent;
      uls[0].classList.toggle('dropdown__list_active');
      event.preventDefault();
    })
  })
}