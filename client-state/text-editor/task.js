let editor = document.getElementById('editor');
let button = document.getElementById('button');

if (localStorage.textdraft) {
  editor.value = localStorage.textdraft;
};

editor.addEventListener('input', function() {
  localStorage.setItem('textdraft', editor.value);
});

button.addEventListener('click', () => {
  editor.value = null;
  localStorage.setItem('textdraft', editor.value);
});

