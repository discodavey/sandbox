var progress = 0;
var j = 0;
var k = 2;
var brian = document.getElementsByClassName('block');
function step() {
  
  if (progress < 120) {
    window.requestAnimationFrame(step);
    progress++;
  } else {
    progress = 0;
    banner();
    if (j<2) {
      if (j==0) {
        console.log(j);
        brian[j].classList.add('show');
        k=2;
        brian[k].classList.remove('show');

      } else if (j==1) {
        console.log(j);
        brian[j].classList.add('show');
        k=0;
        brian[k].classList.remove('show');

      }
      j++;
    } else {
      console.log(j);
      brian[j].classList.add('show');
      k=1;
      brian[k].classList.remove('show');
      j=0;

    }

    function banner() {
      window.requestAnimationFrame(step);
    }
  }
  
}

window.requestAnimationFrame(step);