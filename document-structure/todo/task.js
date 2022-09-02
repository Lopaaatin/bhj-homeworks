let input = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let button = document.getElementById('tasks__add');

button.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    let newTask = `<div class="task">
                    <div class="task__title">
                      ${input.value.trim()}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;
    tasksList.insertAdjacentHTML('beforeend', newTask);
    input.value = null;

  let removeButtons = Array.from(tasksList.querySelectorAll('.task__remove'));
  removeButtons[removeButtons.length - 1].addEventListener('click', (event) => {
    event.preventDefault();
    removeButtons[removeButtons.length - 1].closest('.task').remove();
  });
  }
});