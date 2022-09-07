let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let buttons;

let xmr = new XMLHttpRequest();
xmr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xmr.send();

xmr.addEventListener('readystatechange', () => {

  if ((xmr.readyState == xmr.DONE) && (xmr.status == 200)) {
    let newPollData = JSON.parse(xmr.responseText);
    let id = newPollData.id;
    pollTitle.innerText = newPollData.data.title;
    let answers = newPollData.data.answers;
    answers.forEach((answer) => {
      pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
                                                      ${answer}
                                                   </button>`
      )
    });
  
    buttons = Array.from(pollAnswers.querySelectorAll('button'));
    buttons.forEach(function(button, index) {
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');

        let answerXhr = new XMLHttpRequest();
        answerXhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        answerXhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        answerXhr.send(`vote=${id}&answer=${index}`);
        
        answerXhr.addEventListener('readystatechange', () => {
          if ((answerXhr.readyState == answerXhr.DONE) && (answerXhr.status == 200)) {
            let results = JSON.parse(answerXhr.responseText);
            pollAnswers.innerHTML = null;
            for (let i = 0; i <results.stat.length; i++) {
              pollAnswers.insertAdjacentHTML('beforeend', `<div>
                                                              ${results.stat[i].answer}: <b>${results.stat[i].votes}</b>
                                                          <div>`
              );
            };
          };
        });
      });
    });
  };

});



