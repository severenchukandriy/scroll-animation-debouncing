let box = document.querySelector('.box');
let boxs = document.querySelectorAll('.box');
let minHeight = window.innerHeight / 5 * 4;

function showBox() {
  boxs.forEach(el => {
    if (el.getBoundingClientRect().top < minHeight) {
      el.classList.add('visible')
    } else {
      el.classList.remove('visible')
    }
  })
}

function debounce(f, ms = 300) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  }
}

window.addEventListener('scroll', debounce(showBox))