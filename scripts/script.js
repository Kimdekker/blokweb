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
  lineTwo.classList.toggle('leave');
  lineThree.classList.toggle('rotatemin');
}


// // bron: https://codepen.io/alvarotrigo/pen/XWaYRKK

// function reveal() {
//   var reveals = document.querySelector("main section:nth-of-type(4)");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);




// document.addEventListener('DOMContentLoaded', function() {
//   const radios = document.querySelectorAll('input[name="latest_awards"]');
//   const rows = document.querySelectorAll('.award, .honor');

//   radios.forEach(radio => {
//     radio.addEventListener('change', function() {
//       rows.forEach(row => row.classList.remove('selected'));
//       document.querySelectorAll('.' + this.value).forEach(row => row.classList.add('selected'));
//     });
//   });
// });


// $(document).ready(function() {
//   $('input[name="latest_awards"]').change(function() {
//     var value = $(this).val();
//     if (value == 'award') {
//       $('.honor').addClass('hidden');
//       $('.award').removeClass('hidden');
//     } else if (value == 'honor') {
//       $('.award').addClass('hidden');
//       $('.honor').removeClass('hidden');
//     }
//   });
// });



// bron: https://jsfiddle.net/ydchauh/4cbk0sq5/

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});