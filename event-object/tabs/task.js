let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(function(item, i) {
  item.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('tab_active'));
    tabContents.forEach((item) => item.classList.remove('tab__content_active'));
    item.classList.add('tab_active');
    tabContents[i].classList.add('tab__content_active');
  })
})