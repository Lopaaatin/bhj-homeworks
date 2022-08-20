let modalMain = document.getElementById('modal_main');
let modalClose = Array.from(document.getElementsByClassName('modal__close'));
let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

for (let i=0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function() {
    modalClose[i].closest('.modal').classList.remove('modal_active');
  })
};

showSuccess.addEventListener('click', function() {
  modalSuccess.classList.add('modal_active');
});
