// questa è quella wow

//per il passaggio di parametro
const urlString = window.location.href;
let url = new URL(urlString);
let parameter = url.searchParams.get("name");
console.log(parameter);
let letters = parameter + " ";

// per la video capture
let cnv;
let camera;

let camW = 240;
let camH = 240;

let margin = 30;
let ratio;

let dim = 4;

function preload() {}

function setup() {
  background("black");
  // creo il quadrato
  cnv = createCanvas(windowHeight - margin, windowHeight - margin);

  // centro la canva con la funzione che descrivo poi
  centerCanvas();
  background("black");
  frameRate(15);
  windowResized();

  //"preload" camera
  camera = createCapture(VIDEO);
  camera.size(camW, camH);
  camera.hide();

  // definsico l'aspetto del testo
  //textAlign();
  textSize(dim);
  textFont("Source Code Pro");
}

// descrivo la funzione Center Canvas
function centerCanvas() {
  // definisco le coordinate
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  // sposto il quadrato
  cnv.position(x, y);
}

function draw() {
  // Hey! Ci sono dei pixel!
  camera.loadPixels();
  background("black");

  // definisco var ratio per scalarlo in base alle dimensioni
  if (windowHeight <= windowWidth) {
    ratio = width / camW;
    console.log("sono più largo che lungo");
  } else {
    ratio = height / camH;
    console.log("sono più lungo che largo");
  }
  scale(ratio);
  // per definire ind per piazzare i charachter
  for (let y = 0; y < camH; y += dim) {
    for (let x = 0; x < camW; x += dim) {
      let i = (camW - x + 1 + y * camW) * 4;
      //nb 4 elementi rgb( e alfa) dell'array per ogni pixel
      let r = camera.pixels[i];
      let g = camera.pixels[i + 1];
      let b = camera.pixels[i + 2];
      // r,g,b, possono andare da 0 a 255, quindi (r + g + b) / (255 * 3) è compreso tra 0 e 1
      //moltiplicando l'arrotondamento per letter lenght suddivido i pixel in aree di brightness
      let ind = floor((1 - (r + g + b) / (255 * 3)) * letters.length);
      // e li coloro
      // console.log(colorList[a]);
      if (ind == 0) {
        fill("white");
      } else if (ind == 1) {
        fill("yellow");
      } else if (ind == 2) {
        fill("aqua");
      } else if (ind == 3) {
        fill("magenta");
      } else if (ind == 4) {
        fill("red");
      } else if (ind == 5) {
        fill("#9933ff");
      } else if (ind == 6) {
        fill("black");
      }
      //e li posiziono
      text(letters[ind], x, y);
      textAlign(LEFT, TOP);
    }
  }
}

function windowResized() {
  if (windowHeight <= windowWidth) {
    resizeCanvas(windowHeight - margin, windowHeight - margin);
  } else {
    resizeCanvas(windowWidth - margin, windowWidth - margin);
  }
  centerCanvas();
}
