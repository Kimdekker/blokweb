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

// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function (e) {
//   cursor.style.left = e.clientX + "px",
//     cursor.style.top = e.clientY + "px";
// });


document.body.addEventListener("mousemove", function (e) {
  document.documentElement.style.setProperty("--cursorX", `calc(${e.clientX}px - 2.5em)`);
  document.documentElement.style.setProperty("--cursorY", `calc(${e.clientY}px - 2.5em)`);
});

// function iniFollowCursor() {
// 	document.body.addEventListener("mousemove", updateMouseLocalCoor);
// }

// function updateMouseLocalCoor(e){

// 	let mouseX = e.clientX;
// 	let mouseY = e.clientY;

// 	const element = this;
// 	const elementRectangle = element.getBoundingClientRect();
	
// 	let elementWidth = elementRectangle.width;
// 	let elementHeight = elementRectangle.height;
// 	let x = mouseX / elementWidth;
// 	let y = mouseY / elementHeight;
	
// 	element.style.setProperty("--mouse-x", x);
// 	element.style.setProperty("--mouse-y", y);
// }

// iniFollowCursor();




// To remove clippath on play 
var playButton = document.querySelector('section div button')

playButton.onclick = removeClip

function removeClip() {
  var playButton = document.querySelector('section video')

  playButton.classList.toggle('clippath-none')
  const playText = document.querySelector('main section:first-of-type div button');
  playText.innerText = 'Close';
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



//filter function radiobuttons, bron: Chat GPT

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    var value = this.value;
    document.querySelectorAll('tbody tr').forEach(function(row) {
      if (value === 'awards' || row.classList.contains(value)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});






// stuff
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.');
      return;
  }

  // Define vertex shader and fragment shader source code
  const vertexShaderSource = `
      attribute vec2 position;
      void main() {
          gl_Position = vec4(position, 0.0, 1.0);
      }
  `;

  const fragmentShaderSource = `
      precision mediump float;
      uniform sampler2D u_text;
      uniform float time;

      void main() {
          vec2 uv = gl_FragCoord.xy / vec2(${canvas.width}.0, ${canvas.height}.0); // Assuming canvas size
          uv.y = 1.0 - uv.y; // Flip y-coordinate

          float displacement = sin(uv.y * 10.0 + time) * 0.1; // Adjust distortion here

          vec4 color = texture2D(u_text, vec2(uv.x + displacement, uv.y));
          gl_FragColor = color;
      }
  `;

  // Compile shaders
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  // Create shader program
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Define vertex data for a rectangle
  const vertices = new Float32Array([
      1.0, 1.0,
     -1.0, 1.0,
     -1.0,-1.0,
      1.0, 1.0,
     -1.0,-1.0,
      1.0,-1.0
  ]);

  // Create buffer and put vertex data in it
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // Bind buffer and set attribute pointer
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const position = gl.getAttribLocation(shaderProgram, "position");
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);

  const text = "suprising";
    const textTexture = createTextTexture(gl, text);

    function createTextTexture(gl, text) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '30px Arial';
        canvas.width = ctx.measureText(text).width;
        canvas.height = 40;
        ctx.font = '30px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(text, 0, 30);

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        return texture;
    }

    const u_text = gl.getUniformLocation(shaderProgram, "u_text");
    gl.uniform1i(u_text, 0);

    let startTime = Date.now();
    let isHovered = false;

    function animate() {
        let currentTime = (Date.now() - startTime) * 0.001; // Convert to seconds
        gl.uniform1f(gl.getUniformLocation(shaderProgram, "time"), currentTime);

        if (isHovered) {
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }

        requestAnimationFrame(animate);
    }

    animate();

    canvas.addEventListener('mouseenter', function() {
        isHovered = true;
    });

    canvas.addEventListener('mouseleave', function() {
        isHovered = false;
    });
});



//part 2

function createTextTexture(gl, text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '20px Arial';
    const maxWidth = 300; // Adjust according to your design
    canvas.width = maxWidth;

    const words = text.split(' ');
    let currentLine = '';
    let lines = [];

    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + (i > 0 ? ' ' : '') + words[i];
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && i > 0) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }

    lines.push(currentLine);

    canvas.height = lines.length * 10; // Adjust for line height

    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 0, (i + 1) * 25); // Adjust for line height
    }

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    return texture;
}
