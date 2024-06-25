const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 700
canvas.height = 900

ctx.lineWidth = 10
ctx.strokeStyle = 'magenta'

ctx.beginPath()
ctx.moveTo(250, 700)
ctx.lineTo(350, 600)
ctx.lineTo(450, 700)
ctx.lineTo(350, 800)
ctx.stroke()