let container = document.querySelector('#container');
let paragraph = document.querySelector('#paragraph');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
  let red = (Math.floor(Math.random()*16).toString(16))
  let green = (Math.floor(Math.random()*16).toString(16))
  let blue = (Math.floor(Math.random()*16).toString(16))
  document.body.style.backgroundColor = "#" + red + green + blue;
  
  paragraph.innerText = "This Background has an hexadecimal color of  " + "#" + red + green + blue;
  });