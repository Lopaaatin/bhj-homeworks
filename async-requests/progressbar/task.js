let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    progress.value = (Math.round(10*(event.loaded/event.total)))/10;
    if (event.loaded == event.total) {
      progress.value = 0;
      alert('Загрузка завершена');
    }
  };
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  e.preventDefault();
});