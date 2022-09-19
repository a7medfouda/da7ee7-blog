let heartIcon = document.querySelector('.heart-icon');
heartIcon.addEventListener('click', function () {
  if (heartIcon.getAttribute('check') == 'no') {
    heartIcon.setAttribute('check', 'yes');
    heartIcon.style.cssText = `color: red;`;
  } else if (heartIcon.getAttribute('check') == 'yes') {
    heartIcon.setAttribute('check', 'no');
    heartIcon.style.cssText = `color: #212529;`;
  }
});
// ===================
