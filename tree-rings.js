const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const scale = 100
let res = 0.002
let xAnim = 0
const numPoints = 400
const numRings = 20
const ringSpacing = 20
let points
let rings

function setup() {
    angleMode(DEGREES)
    createCanvas(canvasWidth, canvasHeight);
}
  
  function draw() {
    background(220);
    // stroke(0);
    // strokeWeight(4);
    // for(a = 0; a<TWO_PI; a+=0.1){
    //   var x = 200 + 100*cos(a);
    //   var y = 200 + 100*sin(a);
  
    //   point(x,y);
    // }
    makeRings()
    // console.log(rings)
    rings.forEach(ring => {
        beginShape()
        stroke(0)
        strokeWeight(4)
        noFill()
        ring.forEach(point => {
            stroke(0)
            vertex(point.x, point.y)
        })
    endShape()
    })
    xAnim += 0.001
  }

  const makeRings = () => {
    rings = Array.from({length: numRings}, (ring, rIdx) => {
        noiseSeed(1)
        const points = Array.from({length: numPoints}, (pt, ptIdx) => {
            
            const theta = ptIdx
            const x = canvasWidth/2  + (rIdx * ringSpacing) * cos(theta)
            const y = canvasHeight/2 +  (rIdx * ringSpacing) * sin(theta)
            const n = map(noise(x * res + xAnim, y * res), 0, 1, -scale, scale)
            // const col = map(n, -scale, scale, 0, 10) > 5.5 ? 0 : 255
            return {
                x: x + n, 
                y: y + n,
            }
        })
        return points
    })
  }