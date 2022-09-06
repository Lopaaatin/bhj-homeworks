let loader = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if ((xhr.readyState == xhr.DONE) && (xhr.status == 200)) {
    loader.classList.remove('loader_active');
    let valutes = JSON.parse(xhr.responseText).response.Valute;
    
    for (let key in valutes) {
      items.insertAdjacentHTML('beforeend', `<div class="item">
                                                <div class="item__code">
                                                  ${valutes[key].CharCode}
                                                </div>
                                                <div class="item__value">
                                                  ${valutes[key].Value}
                                                </div>
                                                <div class="item__currency">
                                                  руб.
                                                </div>
                                              </div>`
      );
    };
  };
});

