console.log('burger');

let head = document.getElementsByTagName('head').item(0);
const script = document.createElement('script');
script.setAttribute('id', 'Cookiebot');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
script.setAttribute('data-cbid', '0a5c50d8-fcf9-47b1-8f4f-1eaadb13941b');
script.setAttribute('data-blockingmode', 'auto');
script.innerHTML +="bob";
head.appendChild(script);
