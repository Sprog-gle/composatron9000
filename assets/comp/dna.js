function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < 12; i ++) {
      this.genes[i] = floor(random(0, 10));
    }
  }

  this.crossover = function(partnerDNA) {//partnerDNA) {
    var newgenes = [];
    for (var i = 0; i < this.genes.length; i++) {
      if (random(0, 1) < 0.5) {
        newgenes[i] = this.genes[i];
      } else {
        newgenes[i] = partnerDNA.genes[i];
      }
    }
    return new DNA(newgenes);
    //return new DNA(this.partnerDNA.genes);
  }

  this.mutate = function(j) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(0, 1) < 0.01) {
        this.genes[i] = floor(random(0, 10));
        if (devShow) {
          createP("mutated (song " + j + ", gene " + i + "): " + this.genes[i]);
        }
      }
    }
  }
}

/**
var child = new Song(this.genes); //genes refers to contents of song (instr and midi)
for (var i = 0; i < this.genes.length; i++) {
  if (random(0, 1) > 0.5) child.genes[i] = this.genes[i];
  else child.genes[i] = partner.genes[i];
}
return child;
}
*/
