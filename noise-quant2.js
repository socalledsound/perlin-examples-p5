const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    t = rez = c = n = 0.005;
    strokeWeight(3);
    cols = [
      "#f94144",
      "#f3722c",
      "#f8961e",
      "#f9844a",
      "#f9c74f",
      "#90be6d",
      "#43aa8b",
      "#4d908e",
      "#577590",
      "#277da1",
    ];
  }
  function draw() {
    background(0);
    noStroke();
    for (i = 0; i < width; i += 3) {
      for (j = 0; j < height; j += 3) {
        n = noise(i * rez, j * rez + t) * 10;
        n > 9
          ? (c = 9)
          : n > 8
          ? (c = 8)
          : n > 7
          ? (c = 7)
          : n > 6
          ? (c = 6)
          : n > 5
          ? (c = 5)
          : n > 4
          ? (c = 4)
          : n > 3
          ? (c = 3)
          : n > 2
          ? (c = 2)
          : n > 1
          ? (c = 1)
          : (c = 0);
        //   if(n > 9){
        //     c = 9
        //   }else if(n > 8){
        //     c = 8
        //   }etc
        fill(cols[c]);
        rect(i, j, 3);
      }
    }
    // t += 0.01;
  }