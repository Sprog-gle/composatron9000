var ratings = [];
var ratingCount = 0;

var population;

var devShow = false;

var generations = 0;

function setup() {
  createCanvas(600, 600);
  textSize(30);
  song = new Song();
  population = new Population();
}

function draw() {
  background(0);
  population.run();
  rankDisplay();
  text(generations, 20, 580);
  if (devShow == true) {
    text("dev", 530, 580)
  }
}

function keyPressed() {
  if (key > 0 && key < 10 && ratingCount < 10) {
    ratings[ratingCount] = key;
    ratingCount ++;
  } else if (keyCode == ENTER && ratingCount == 10) {
    //calculate fitness of songs yada yada
    population.evaluate();
    population.selecting();
    population.matingpool = [];
    ratingCount = 0;
    generations ++;
  } else if (keyCode == BACKSPACE) {
    ratingCount --;
  } else if (keyCode == SHIFT) {
    devShow = !devShow;
  }
}

function rankDisplay() {
  fill(255);
  for (var i = 0; i < ratingCount; i++) {
    text(ratings[i], 30, 30 + 35*i);
  }
}


function Song(dna) {
  this.fitness;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.show = function(i) {
    text("Song" + i + ": " + this.dna.genes, 80, 30 + 35*i)
  }
}
