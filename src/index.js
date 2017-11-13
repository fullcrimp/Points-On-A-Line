module.exports = function isPointsOnLine(points) {
  let line = new Line(points[0], points[1])
  
  for(let i = 1, point; point = points[i]; i++) {
    if(!line.comesThrough(point)) return false
  }
  return true
}

class Line {
  constructor(pointA, pointB) {
    this.k = (pointA[1] - pointB[1]) / (pointA[0] - pointB[0])
    this.b = pointB[1] - this.k * pointB[0]
  }
  comesThrough(point) {
    return point[1] === this.k * point[0] + this.b
  }
} 
