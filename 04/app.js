//console.log('app.js');
console.log(window.outerWidth);
console.log(window.name);
// window.open('http://www.daum.net');

// var debug = document.getElementById('debug');
// console.log(debug);

// var box = document.querySelector('.box');
// console.log(box);

// var div = document.createElement('div');
// // console.log(div);
// div.style.border = "1px solid #000";
// div.innerHTML = "hello";
// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

var debug = document.getElementById('debug');
debug.remove();

const el = document.getElementById('div1');
el.remove();