let clicker__counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let clicker__speed = document.getElementById('clicker__speed');
let clicksTime = []; // массив, в который буду складывать абсолютное время каждого клика в миллисекундах

// действие при нажатии кнопки мыши
cookie.addEventListener('mousedown', function() {
  clicker__counter.textContent = parseInt(clicker__counter.textContent) + 1;
  cookie.width = '250';
  
  let now = new Date();
  clicksTime.push(now.getTime());
  let clicksRelativeTime = clicksTime.map(function(item,i) { // создаю массив с относительным временем каждого клика (относительно предыдуего клика)
    if (i == 0) {
      return 0;
    } else {
        return (item - clicksTime[i-1]);
    }
  });

  let averageTime; // расчитываю среднее количество кликов в секунду из среднего времени, затраченного на клик
  if (clicksRelativeTime.length == 1) {
    averageTime = 1;
  } else {
    averageTime = (Math.round(100*1000*(clicksRelativeTime.length - 1)/(clicksRelativeTime.reduce((sum, current) => sum + current, 0))))/100;
  }
  clicker__speed.textContent = averageTime;
  console.log(clicksTime);
  console.log(clicksRelativeTime);
})

// действие при отпускании кнопки мыши
cookie.addEventListener('mouseup', function() {
  cookie.width = '200';
})
