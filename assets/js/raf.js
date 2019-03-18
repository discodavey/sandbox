var progress = 0;
var start = null;
var j = 0;
var k = 2;
var timeSet = 2000;
var carousel = document.getElementsByClassName('block');
console.log('This is ' + j, k);

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  if (progress < timeSet) {
    window.requestAnimationFrame(step);
  }
  if (progress >= timeSet) {
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
  carousel[j].classList.add('show');
  carousel[k].classList.remove('show');
}

window.requestAnimationFrame(step);
