const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const scale = 0.005
const res = 3
const noiseHeight = canvasHeight/2
let counter = 0
const inc = 1
function setup() {
    createCanvas(canvasWidth, canvasHeight);
  }
  
  function draw() {
    background(220);
    noStroke();
    for(i = 0; i < canvasWidth; i += res){
        const yCenter = canvasHeight/2 - 200
        const n = noise(i * scale, counter * scale)
        //const n = random(0,1)
        fill(n * 255) 
        rect(i, yCenter + (n * 500), res, res )
        //rect(i, canvasHeight/2 - 200, res, res )
    }
    counter+=inc
  }