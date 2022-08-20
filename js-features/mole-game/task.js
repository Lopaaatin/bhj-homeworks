function getHole(index) {
  return document.getElementById(`hole${index}`);
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
  getHole(i).addEventListener('click', 
    function() {
      if (getHole(i).className.includes( 'hole_has-mole' )) {
        dead.textContent = parseInt(dead.textContent) + 1;
      } else {
        lost.textContent = parseInt(lost.textContent) + 1;
      }

      if (dead.textContent == 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert('Вы победили!');
      } 
    
      if (lost.textContent == 5) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert('Вы проиграли!');
      }
    }
  );
}


