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



document.body.addEventListener("mousemove", function (e) {
  document.documentElement.style.setProperty("--cursorX", `calc(${e.clientX}px - 2.5em)`);
  document.documentElement.style.setProperty("--cursorY", `calc(${e.clientY}px - 2.5em)`);
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



var playButton = document.querySelector('section div button');

playButton.onclick = toggleState;

function toggleState() {
  var playButton = document.querySelector('section video');
  var playText = document.querySelector('main section:first-of-type div button span');

  if (playText.innerText === 'X') {
    playButton.classList.toggle('clippath-none');
    playText.innerText = 'Play';
  } else {
    playButton.classList.toggle('clippath-none');
    playText.innerText = 'X';
  }
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
}, {
  threshold: 0.2
});

observer.observe(flyInUnder);
