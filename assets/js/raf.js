var progress = 0;
var start = null;
var j = 0;
var k = 2;
var timeSet = 4000;
var carousel = document.getElementsByClassName('block');
//console.log('This is ' + j, k);

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  if (progress < timeSet) {
    window.requestAnimationFrame(step);
  }
  if (progress > timeSet) {
    if (j == 2) {
      j=0;
      k=2;
    } else {
      j++;
      k=j-1;
    }

    console.log('This is ' + j, k);
    bannerSwitch(j,k);
    start = null;
    window.requestAnimationFrame(step);
  }
}

function bannerSwitch(j,k) {
  console.log(j,k);
  carousel[j].classList.add('show');
  carousel[k].classList.remove('show');
  // var blockOne = document.querySelector('.block1');
  var blockTwo = document.querySelector('.block2');
  // var blockThree = document.querySelector('.block3');
  // blockOne.classList.add('slide-first');
  blockTwo.classList.add('slide-first');
  // blockThree.classList.add('slide-first');
}

window.requestAnimationFrame(step);
