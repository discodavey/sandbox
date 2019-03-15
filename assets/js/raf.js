var progress = 0;
var start = null;
var j = 0;
var k = 2;
var carousel = document.getElementsByClassName('block');
function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  if (progress < 120) {
    window.requestAnimationFrame(step);

  }

  if (progress >=120) {
    console.log('dave');
    if (j<2) {
      if (j==0) {
        bannerSwitch(1,2);
      } else if (j==1) {
        bannerSwitch(1,0);
      }
    } else {
      bannerSwitch(0,2);
      j=0;
    }

  }

}

function bannerSwitch(j,k) {
  carousel[j].classList.add('show');
  carousel[k].classList.remove('show');
  window.requestAnimationFrame(step);

}

window.requestAnimationFrame(step);
