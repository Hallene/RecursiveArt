function setup() {
  canvas_size = 400
  createCanvas(canvas_size,  canvas_size)
}

function draw() {   
  background(105,105,105)
  fill(255, 127, 80)
  recursive_triangle(6, 10, canvas_size - 10, canvas_size / 2, 10, canvas_size - 10, canvas_size - 10)
}

function recursive_triangle(iterations, x1, y1, x2, y2, x3, y3) {
  if (iterations <= 1) {
    triangle(x1, y1, x2, y2, x3, y3)
    return
  }

  let x12 = (x1 + x2)/ 2
  fill(255,127,80)

  let y12 = (y1 + y2) / 2
  fill(107,142,35)

  let x23 = (x2 + x3) /2
  fill(255,127,80)

  let y23 = (y2 + y3) /2
  fill(107,142,35)

  let x13 = (x1 + x3) /2
  fill(107,142,35)
 

  let y13 = (y1 + y3) /2
  fill(255,127,80)


  recursive_triangle(iterations - 1, x1, y1, x12, y12, x13, y13)
  fill(218,165,32)
  recursive_triangle(iterations - 1, x12, y12, x2, y2, x23, y23)
  fill(218,218,0)
  recursive_triangle(iterations - 1, x13, y13, x23, y23, x3, y3)
  fill(188,143,143)

  stroke(255,250,205)

}

