let first = document.querySelector('.first');
let second = document.querySelector('.second');
let play = document.querySelector('.play');
let reset = document.querySelector('.reset');
let imgs = [1, 2, 3];
let img = document.querySelector('.img');
let first_win = document.querySelector('.first_win');
let second_win = document.querySelector('.second_win');
let win1 = 1;
let win2 = 1;
play.onclick = () => {
  setInterval(() => {
    img.style.animation = 'animButton 1s';
  }, 0);
  setInterval(() => {
    first.style.animation = 'animButton2 1s';
  }, 0);
  setTimeout(() => {
    let timer = setInterval(() => {
      let firstRand = Math.floor(Math.random() * imgs.length + 1);
      first.src = `img/${firstRand}.png`;
      let secRandom = Math.floor(Math.random() * imgs.length + 1);
      second.src = `img/${secRandom}.png`;
    }, 200);

    setTimeout(() => {
      clearInterval(timer);
      if (first.getAttribute('src') == second.getAttribute('src')) {
        alert("It's a draw!");
      } else if (
        (first.getAttribute('src') == 'img/1.png' &&
          second.getAttribute('src') == 'img/2.png') ||
        (first.getAttribute('src') == 'img/2.png' &&
          second.getAttribute('src') == 'img/3.png') ||
        (first.getAttribute('src') == 'img/3.png' &&
          second.getAttribute('src') == 'img/1.png')
      ) {
        first_win.innerHTML = win1++;
        setTimeout(() => {
          alert('first player wins!!');
        }, 1000);
      } else {
        second_win.innerHTML = win2++;
        setTimeout(() => {
          alert('second player wins!!');
        }, 1000);
      }
    }, 5000);
  }, 1000);
};
reset.onclick = () => {
  location.reload();
};
