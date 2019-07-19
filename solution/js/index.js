'use strict';

const copyButton = document.querySelector('.copy__button');
const picture2 = document.querySelector('.picture__2');

function copyTopThird(picture) {
  const picture2Container = document.querySelector('.picture__2-container');
 
  picture2Container.classList.toggle('copy');
}

copyButton.addEventListener('click', copyTopThird);
