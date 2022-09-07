let formDiv = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let form = document.getElementById('signin__form');
let userIdSpan = document.getElementById('user_id');
let logoutButton = document.getElementById('logout_button');

if (localStorage.userId) {
  formDiv.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdSpan.textContent = localStorage.userId;
  logoutButton.classList.add('logout_active')
} else {
  form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == xhr.DONE && xhr.status == 200) {
        let authData = JSON.parse(this.responseText);
        if (authData.success) {
          localStorage.userId = authData.user_id;
          formDiv.classList.remove('signin_active');
          welcome.classList.add('welcome_active');
          userIdSpan.textContent = localStorage.userId;
          logoutButton.classList.add('logout_active');
          form.elements.login.value = null;
          form.elements.password.value = null;
        } else {
          form.elements.login.value = null;
          form.elements.password.value = null;
          alert('Неверный логин или пароль');
        }
      };
    });  
    
    e.preventDefault();
  });
}

logoutButton.addEventListener('click', (e) => {
  delete localStorage.userId;
  formDiv.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  userIdSpan.textContent = localStorage.userId;
  logoutButton.classList.remove('logout_active')
  e.preventDefault();
})