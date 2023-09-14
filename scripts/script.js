// JavaScript Document
console.log("hi");

var menuBtn = document.querySelector('header button');

menuBtn.onclick = foldMenu

function foldMenu(){
  var menuBtn = document.querySelector('header nav');
  var lineOne = document.querySelector('header button span:nth-of-type(1)');
  var lineTwo = document.querySelector('header button span:nth-of-type(2)');
  var lineThree = document.querySelector('header button span:nth-of-type(3)');

  menuBtn.classList.toggle('showmenu');
  lineOne.classList.toggle('rotateplus');
  lineTwo.classList.toggle('scaley');
  lineThree.classList.toggle('rotatemin');
}

