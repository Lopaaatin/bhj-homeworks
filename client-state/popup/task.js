let subscribeModal = document.getElementById('subscribe-modal');
let modalClose = document.querySelector('.modal__close');

function getCookie(name) {
  let pairs = document.cookie.split('; ');
  let cookie = pairs.find(p => p.startsWith(name + '='));
  if (cookie) {
    return cookie.split('=')[1];
  }
}

if (getCookie('modalisclosed') == 'true') {
  subscribeModal.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
  subscribeModal.classList.remove('modal_active');
  document.cookie = 'modalisclosed=true';
});