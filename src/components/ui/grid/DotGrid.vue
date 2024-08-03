<!-- Author: https://codepen.io/efriberg -->
<script setup>
import { onMounted } from 'vue'

class DotGrid {
  constructor(container = 'sketch') {
    this.canvasElement = document.getElementById(container)

    this.dpr = window.devicePixelRatio || 1

    this.drawable = this.canvasElement.getBoundingClientRect()

    this.canvasWidth = this.drawable.width * this.dpr
    this.canvasHeight = this.drawable.height * this.dpr

    this.canvasElement.width = this.canvasWidth
    this.canvasElement.height = this.canvasHeight

    this.mouseX = 0
    this.mouseY = 0

    this.canvas = this.canvasElement.getContext('2d')
    this.canvas.scale(this.dpr, this.dpr)
  }

  onMouseUpdate(e) {
    this.mouseX = e.pageX - this.drawable.left
    this.mouseY = e.pageY - this.drawable.top

    window.requestAnimationFrame(this.draw.bind(this))
  }

  init() {
    window.requestAnimationFrame(this.draw.bind(this))
    document.body.addEventListener('mousemove', this.onMouseUpdate.bind(this), false)
  }

  // Draws the background and calls the function for drawing the dots
  draw() {
    this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.drawDots()
  }

  // i and j function as x and y when drawing the dot grid.
  drawDots() {
    let size = 1
    let gridSize = 20
    for (let i = 2; i < this.canvasWidth / this.dpr / gridSize - 1; i++) {
      for (let j = 2; j < this.canvasHeight / this.dpr / gridSize - 1; j++) {
        let x = i * gridSize
        let y = j * gridSize
        let dist = this.pythag(x, y, this.mouseX, this.mouseY)
        this.canvas.beginPath()
        this.canvas.arc(
          x + ((x - this.mouseX) / dist) * gridSize,
          y + ((y - this.mouseY) / dist) * gridSize,
          size,
          size,
          Math.PI,
          true
        )
        this.canvas.fillStyle = 'black'
        this.canvas.fill()
      }
    }
  }

  // Grabs mouse position, checks if the mouse is off the screen (NaN) and calculates the distance from the mouse pointer and each dot using the pythagorean theorem.
  pythag(ellipseX, ellipseY, mouseX, mouseY) {
    let x = mouseX
    let y = mouseY

    if (isNaN(x)) {
      return 1
    } else {
      let leg1 = Math.abs(x - ellipseX)
      let leg2 = Math.abs(y - ellipseY)
      let pyth = Math.pow(leg1, 2) + Math.pow(leg2, 2)
      return Math.sqrt(pyth)
    }
  }
}

onMounted(() => {
  const grid = new DotGrid('sketch')
  grid.init()
})
</script>

<template>
  <canvas id="sketch" class="block h-[600px] w-[600px]"></canvas>
</template>
