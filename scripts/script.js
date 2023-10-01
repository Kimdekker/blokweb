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



// To remove clippath on play 
var playButton = document.querySelector('section div button')

playButton.onclick = removeClip

function removeClip() {
  var playButton = document.querySelector('section video')

  playButton.classList.toggle('clippath-none')
  const playText = document.querySelector('main section:first-of-type div button');
  playText.innerText = 'New Content';
}



// Add scroll animation on list menu homepage

const flyInUnder = document.querySelector('main section:nth-of-type(4)');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

observer.observe(flyInUnder);