// --------------- 1.

// let timer = document.getElementById('timer');

// function loseSecond() {
//   let timeLeft = parseInt(timer.textContent) - 1;

//   if (timeLeft > 0) {
//     return timer.textContent = String(timeLeft);
//   } 
//   else if (timeLeft == 0) {
//     clearInterval(loseSecond);
//     alert('Вы победили в конкурсе!');
//     return timer.textContent = String(timeLeft)
//   }
// }

// setInterval(loseSecond, 1000);


// --------------- 1. #1 Повышенный уровень сложности

// let timer = document.getElementById('timer');

// function loseSecond() {
//   let timerDataArray = timer.textContent.split(':'); //превращаю строку времени в массив [чч, мм, сс]
//   let timeLeft = parseInt(timerDataArray[0])*3600 + parseInt(timerDataArray[1])*60 + parseInt(timerDataArray[2]) - 1; // Привожу каждый элемент массива к Number, вычисляю общее время таймера в секундах и отнимаю одну секунду.
//   let hours = Math.floor(timeLeft/3600); // количество оставшихся целых часов до срабатывания таймера
//   let minutes = Math.floor(timeLeft/60) - hours*60; // количество оставшихся целых минут до срабатывания таймера
//   let seconds = timeLeft % 60; // количество оставшихся целых секунд до срабатывания таймера
  
//   // привожу часы, минуты, секунды к двузначному формату
//   if (hours < 10) { 
//     hours = `0${hours}`;
//   }
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }
  
//   if (timeLeft > 0) {
//     return timer.textContent = (`${hours}:${minutes}:${seconds}`);
//   } 
//   else if (timeLeft == 0) {
//     clearInterval(loseSecond); // сбрасываю таймер по истечении времени, чтоб не уйти в минус
//     alert('Вы победили в конкурсе!');
//     return timer.textContent = (`${hours}:${minutes}:${seconds}`);
//   }
// }

// setInterval(loseSecond, 1000);


// --------------- 1. #2 Повышенный уровень сложности

let fileDownlading = document.createElement('a');
fileDownlading.href = 'https://dizbook.com/images/projects/86/86af8f7307577111e5c4c3938cd72a22.jpg';
fileDownlading.setAttribute('download', '');
fileDownlading.setAttribute('target', '_blank');

let timer = document.getElementById('timer');

function loseSecond() {
  let timerDataArray = timer.textContent.split(':'); //превращаю строку времени в массив [чч, мм, сс]
  let timeLeft = parseInt(timerDataArray[0])*3600 + parseInt(timerDataArray[1])*60 + parseInt(timerDataArray[2]) - 1; // Привожу каждый элемент массива к Number, вычисляю общее время таймера в секундах и отнимаю одну секунду.
  let hours = Math.floor(timeLeft/3600); // количество оставшихся целых часов до срабатывания таймера
  let minutes = Math.floor(timeLeft/60) - hours*60; // количество оставшихся целых минут до срабатывания таймера
  let seconds = timeLeft % 60; // количество оставшихся целых секунд до срабатывания таймера
  
  // привожу часы, минуты, секунды к двузначному формату
  if (hours < 10) { 
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  if (timeLeft > 0) {
    return timer.textContent = (`${hours}:${minutes}:${seconds}`);
  } 
  else if (timeLeft == 0) {
    clearInterval(loseSecond); // сбрасываю таймер по истечении времени, чтоб не уйти в минус
    fileDownlading.click();
    return timer.textContent = (`${hours}:${minutes}:${seconds}`);
  }
}

setInterval(loseSecond, 1000);



