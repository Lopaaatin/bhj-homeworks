let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltips.forEach(function(hasTooltip, i) {
  let div = `<div class="tooltip">${hasTooltip.title}</div>`;
  hasTooltip.insertAdjacentHTML("afterend", div);

  hasTooltip.addEventListener('click', (e) => {

    e.preventDefault();

    let tooltipDivs = Array.from(document.querySelectorAll('.tooltip'));
    tooltipDivs.forEach((tooltipDiv) => {
      if (tooltipDiv !== tooltipDivs[i]) {
        tooltipDiv.classList.remove('tooltip_active');
      }
    });
    
    tooltipDivs[i].classList.toggle('tooltip_active');

    // Позиционирую всплывающую подсказку в зависимости от значения ее атрибута data-position
    tooltipDivs[i].dataset.position = 'top';

    let position = hasTooltip.getBoundingClientRect();
    let tooltipLength = tooltipDivs[i].getBoundingClientRect().right - tooltipDivs[i].getBoundingClientRect().left;
    let tooltipHeigth = tooltipDivs[i].getBoundingClientRect().bottom - tooltipDivs[i].getBoundingClientRect().top;
    let left;
    let top;

    if (tooltipDivs[i].dataset.position == 'bottom') {
      left = position.left;
      top = position.bottom;
    }

    if (tooltipDivs[i].dataset.position == 'left') {
      left = position.left - tooltipLength;
      top = ((position.top + position.bottom)/2 - (tooltipHeigth/2));
    }

    if (tooltipDivs[i].dataset.position == 'top') {
      left = position.left;
      top = position.top - tooltipHeigth;
    }

    if (tooltipDivs[i].dataset.position == 'right') {
      left = position.right;
      top = ((position.top + position.bottom)/2 - (tooltipHeigth/2));
    }

    tooltipDivs[i].setAttribute('style', `left: ${left}px; top: ${top}px`);
    
  });

});