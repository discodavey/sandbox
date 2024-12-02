const burger = document.querySelector('.burger');
const audioElement = iframe.contentWindow.document.getElementsByTagName('audio');
burger.addEventListener('click', function () {

  console.log('test');
  //const iframe = document.getElementById('playback');
  //const audioElement = iframe.contentWindow.document.getElementsByTagName('audio');
  audioElement.play();
});