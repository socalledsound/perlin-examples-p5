let t = rez = c = n = 0.008;
function setup() {
    createCanvas(301, 301);

    strokeWeight(3);
    background(0);
    noStroke();
    for (i = 0; i < height; i += 3) {
      for (j = 0; j < width; j += 3) {
        n = noise(i * rez, j * rez);
        
        //uncomment the next line to see difference between noise() and random()
        //n = random()
        if(n > 0.6){
        fill(255);
        } else {
          fill(0);
        }
        rect(i, j, 3);
      }
    }
}
