//questa è la prima pagina che si apre
//cose per il passaggio di variabile
const urlString = window.location.href;
let url = new URL(urlString);

let WIDTH;
let HEIGHT;
// una string è in realtà un array di caratteri e funziona allo stesso modo
let myText = "choose a 6 digits nickname";
let m;
let button;
let input;

function setup() {
  //WIDTH e HEIGHT così mi permettono di usarle in altre funzioni
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  createCanvas(WIDTH, HEIGHT);
  //creo inpt
  input = createInput();
  input.attribute("maxlength", "6");
  input.style("border", "0px");
  input.style("border-radius", "0px");
  input.style("font-family", "monospace");
  //creo button
  button = createButton("go");
  button.style("font-family", "monospace");
  button.style("background-color", "yellow");
  button.style("border", "0px");
  button.style("border-radius", "100px");
  button.style("text-align", "center");
  // ci attacco la funzione go
  button.mousePressed(go);
}

function draw() {
  windowResized();
  let m = WIDTH / 90;
  //questi vanno qui se no non resizano
  input.position(WIDTH / 2 - (input.width + button.width) / 2, HEIGHT / 2);
  button.position(input.x + input.width + button.width, HEIGHT / 2);
  // definisco l'aspetto del testp
  textAlign(CENTER, CENTER);
  textSize(WIDTH / 80);
  textFont("Source Code Pro");
  let text_x = (WIDTH - myText.length * m) / 2;
  let text_y = (9 * HEIGHT) / 19;

  // definisco i colori per ciascun carattere
  //#000000 è il colore che ho attribuito allo spazio tra una parola e l'altra
  let colorArray = [
    color("magenta"),
    color("white"),
    color("red"),
    color("yellow"),
    color("#9933ff"),
    color("aqua"),
    color("#000000"),
    color("magenta"),
    color("#000000"),
    color("white"),
    color("#000000"),
    color("red"),
    color("yellow"),
    color("#9933ff"),
    color("aqua"),
    color("magenta"),
    color("white"),
    color("#000000"),
    color("red"),
    color("yellow"),
    color("#9933ff"),
    color("aqua"),
    color("magenta"),
    color("white"),
    color("red"),
    color("yellow"),
  ];
  // definisco posizione della lettera e colore sulla base del suo index nell'array
  for (let i = 0; i < myText.length; i++) {
    fill(colorArray[i]);
    text(myText[i], text_x, text_y);
    // console.log("Lettera: " + myText[i]);
    text_x = text_x + m;
    console.log(myText[0]);
  }
}

// funzione per pagina che si aggiusta se la resize-i
function windowResized() {
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  resizeCanvas(WIDTH, HEIGHT);
}

// funzione passaggio di pagina + store variabile
function go() {
  if (input.value() != "") {
    name = input.value();
    url +
      "mirror_index.html?count=" +
      window.open(url + "mirror_index.html?name=" + name, "_self");
  }
}
