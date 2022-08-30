let chatWidget = document.querySelector('.chat-widget');
let timeoutId;
let chatWidgetMessages = document.getElementById('chat-widget__messages');
let chatContainer = document.querySelector('.chat-widget__messages-container');

// Список сообщений от бота
let botAnswers = [
  'Сообщение 1',
  'Сообщение 2',
  'Сообщение 3',
  'Сообщение 4',
  'Сообщение 5',
  'Сообщение 6',
  'Сообщение 7',
  'Сообщение 8',
  'Сообщение 9',
];

// Функция генерации сообщения ботом
function botAsk() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  };
  if (minutes < 10) {
    minutes = `0${minutes}`;
  };
  let currentTime = `${hours}:${minutes}`;

  chatWidgetMessages.innerHTML += `
  <div class="message">
      <div class="message__time">${currentTime}</div>
      <div class="message__text">
        ${botAnswers[Math.floor(Math.random()*(botAnswers.length + 1))]}
      </div>
    </div>`;

}

// Функция, чтоб развернуть чат, запустить таймер, отключить реакцию на событие "клик по чату", 
// чтоб не запускались новые таймеры при последующем клике на поле ввода
function openChat () {
  chatWidget.classList.add('chat-widget_active');
  timeoutId = setTimeout(botAsk, 30000);  
  chatWidget.removeEventListener('click', openChat);
};

// Действие по клику на вкладку чата: развернуть чат, запустить таймер 
chatWidget.addEventListener('click', openChat);

// действие при отправке сообщения: сброс таймера, добавление сообщения пользователя, обнуление формы ввода, добавление ответа бота.
let chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.addEventListener('change', function() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  };
  
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  };
  if (minutes < 10) {
    minutes = `0${minutes}`;
  };
  let currentTime = `${hours}:${minutes}`;

  if (chatWidgetInput.value) {
    chatWidgetMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">
          ${chatWidgetInput.value}
        </div>
      </div>`;
    
    chatWidgetInput.value = null;

    chatWidgetMessages.innerHTML += `
      <div class="message">
          <div class="message__time">${currentTime}</div>
          <div class="message__text">
            ${botAnswers[Math.floor(Math.random()*(botAnswers.length + 1))]}
          </div>
        </div>`;

    let messages = Array.from(document.querySelectorAll('.message'));
    let lastMessage = messages[(messages.length - 1)];

    if (lastMessage.getBoundingClientRect().bottom > chatContainer.getBoundingClientRect().bottom) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  timeoutId = setTimeout(botAsk, 30000);  
});



