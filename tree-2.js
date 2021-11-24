const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const ringSize = canvasWidth/4
const numPoints = 360
const scale = 200
let points
function setup(){
    angleMode(DEGREES)
    createCanvas(canvasWidth, canvasHeight)

    points = Array.from({length: numPoints}, (el, i) => {
        const theta = i
        const n = noise(i/100)
        const mappedNoise = map(n, 0, 1, -scale, scale)
        const x = canvasWidth/2 + ringSize * sin(theta)
        const y = canvasWidth/2 + ringSize * cos(theta)
        return {
            x : x + mappedNoise,
            y: y + mappedNoise,
        }
    })
}

function draw(){
    background(255)
    beginShape()
        stroke(30)
        points.forEach(point => vertex(point.x, point.y))
    endShape()
}