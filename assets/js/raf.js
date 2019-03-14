var progress = 0;
var start = null;
var j = 1;
var k = 2;
var carousel = document.getElementsByClassName('block');
function step(timestamp) {

  if (!start) start = timestamp;
  var progress = timestamp - start;

  if (progress < 120) {
    bannerSwitch();
    window.requestAnimationFrame(step);

  }

}

function bannerSwitch() {
  console.log('This is j' + j, 'This is k' + k);
  carousel[j].classList.add('show');
  carousel[k].classList.remove('show');

  if (j==2) {
    j=0;
    k=j+2;
  } else {
    j++;
    k=j-1;
  }
}

window.requestAnimationFrame(step);