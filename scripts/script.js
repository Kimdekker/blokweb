var menuBtn = document.querySelector('header button');

menuBtn.onclick = foldMenu

function foldMenu() {
  var menuBtn = document.querySelector('header nav');
  var lineOne = document.querySelector('header button span:nth-of-type(1)');
  var lineTwo = document.querySelector('header button span:nth-of-type(2)');
  var lineThree = document.querySelector('header button span:nth-of-type(3)');

  menuBtn.classList.toggle('showmenu');
  lineOne.classList.toggle('rotateplus');
  lineTwo.classList.toggle('leave');
  lineThree.classList.toggle('rotatemin');
}



// bron: https://jsfiddle.net/ydchauh/4cbk0sq5/

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});