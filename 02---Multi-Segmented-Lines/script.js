const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 700
canvas.height = 900

ctx.lineWidth = 10
ctx.strokeStyle = 'magenta'

class Line {
    constructor(canvas) {
        this.canvas = canvas
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.history = [{x: this.x, y: this.y}]
        this.lineWidth = Math.floor(Math.random() * 15 + 1)
        this.hue = Math.floor(Math.random() * 360)
    }
    draw(context) {
        context.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)'
        context.lineWidth = this.lineWidth
        context.beginPath()
        context.moveTo(this.history[0].x, this.history[0].y)
        for (let i = 0; i < 30; i++) {
            this.x = Math.random() * this.canvas.width
            this.y = Math.random() * this.canvas.height
            this.history.push({x: this.x, y: this.y})
        }
        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y)
        }
        context.stroke()
    }
}

const linesArray = []
const numberOfLines = 1
for (let i = 0; i < numberOfLines; i++) {
    linesArray.push(new Line(canvas))
}


function animate() {
    linesArray.forEach(line => line.draw(ctx))
    requestAnimationFrame(animate)
}

animate()