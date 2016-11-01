
function Population() {
  this.songs = [];
  this.popsize = 10;
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.songs[i] = new Song();
  }

  this.evaluate = function() {
    for (var i = 0; i < this.popsize; i++) {
        this.songs[i].fitness = ratings[i];
        var n = this.songs[i].fitness * 100;
        for (var j = 0; j < n; j++) {
        this.matingpool.push(this.songs[i]);
        //this.matingpool[i] = this.songs[i];
      }
    }
    if (devShow == true) {
      createP("mating pool size: " + this.matingpool.length);
    }
  }

  this.selecting = function() {
    for (var i = 0; i < this.popsize; i ++) { //for as many songs as there are
      var a = floor(random(this.matingpool.length)); //selects random song from mating pool
      //var b = floor(random(this.matingpool.length)); //and another
      var b = this.selectParentB(a); //and another, checking that they are not the same
      var partnerA = this.matingpool[a]; //assigns value to partnerA
      var partnerB = this.matingpool[b]; //and the second to partnerB
      var newDNA = partnerA.dna.crossover(partnerB.dna);
      var child = new Song(newDNA);// //initializes child as return product of
                                                       //crossover function of partnerA, widt
                                                       //arguments: partnerB.
      if (devShow) {
        createP("child " + i + " (song " + a + ", song " + b + "): " + newDNA.genes)
      }
      child.dna.mutate(i); //runs the child through the mutate function

      this.songs[i] = child; //replaces current song with newly created child
    }
  }

  this.selectParentB = function(q) {
    var p = floor(random(this.matingpool.length)); //selects random song from mating pool
    if (p != q) { //if it is not equal to song a
      return p; //return it as var b
    } else { //otherwise...
      return this.selectParentB(q); //...runs function again
    }
  }

  this.run = function() {
    for (var i = 0; i < this.songs.length; i++) {
      this.songs[i].show(i);
    }
  }
}
