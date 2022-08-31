let interestCheck = Array.from(document.querySelectorAll('.interest__check'));

for (let i = 0; i < interestCheck.length; i++) {
  let parentChecker;
  if (interestCheck[i].closest('.interests_active')) {
    parentChecker = interestCheck[i].closest('.interests_active').closest('.interest').querySelector('.interest__check');
    
    let allChildren = Array.from(parentChecker.closest('.interest').querySelectorAll('.interest__check'));

    parentChecker.addEventListener('change', function() {
      if (parentChecker.checked) {
        allChildren.forEach((child) => child.checked = true);
      } else if (!parentChecker.checked) {
        allChildren.forEach((child) => child.checked = false);
      }
    });

    interestCheck[i].addEventListener('change', function() {
      if ((!interestCheck[i].checked) && (parentChecker.checked)) {
        parentChecker.checked = false;
      }
    });
  };
}



