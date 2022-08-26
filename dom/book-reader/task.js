let book = document.getElementById('book');

let fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
let bookFontSizeClasses = ["book_fs-small", , "book_fs-big"];

let colorButtons = Array.from(document.querySelectorAll('.color')).splice(0, 3);
let bookTextColorsClasses = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];

let bgColorButtons = Array.from(document.querySelectorAll('.color')).splice(3, 3);
let bookBgColorsClasses = ['book_bg-black', 'book_bg-gray', 'book_bg-whitesmoke'];

fontSizeButtons.forEach(function(button, i) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    fontSizeButtons.forEach((item) => item.classList.remove('font-size_active'));
    button.classList.add('font-size_active');
    bookFontSizeClasses.forEach((el) => (el) ? book.classList.remove(el) : true);
    book.classList.add(bookFontSizeClasses[i]);
  });
});

colorButtons.forEach(function(button, i) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    colorButtons.forEach((item) => item.classList.remove('color_active'));
    button.classList.add('color_active');
    bookTextColorsClasses.forEach((el) => (el) ? book.classList.remove(el) : true);
    book.classList.add(bookTextColorsClasses[i]);
  });
});  

bgColorButtons.forEach(function(button, i) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    bgColorButtons.forEach((item) => item.classList.remove('color_active'));
    button.classList.add('color_active');
    bookBgColorsClasses.forEach((el) => (el) ? book.classList.remove(el) : true);
    book.classList.add(bookBgColorsClasses[i]);
  });
});  

