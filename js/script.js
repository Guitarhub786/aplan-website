$(function () {
  const $gallery = $('.gallery a').simpleLightbox();
});

function logo() {
  const logo = document.querySelectorAll('#logo path');

  for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }
}



