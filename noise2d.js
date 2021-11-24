const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const scale = 0.005
const res = 3

function setup() {
    createCanvas(canvasWidth, canvasHeight);
  }
  
  function draw() {
    background(220);
    noStroke();
    for(i = 0; i < height; i += res){
      for(j = 0; j < width; j += res){
        
        const n = noise(i * scale,  j * scale)
        //const n = random(0,1)
        fill(n * 255) 
        rect(i, j , res, res )
      }
    }
    noLoop()
  }