var victor = require('victor')

var direction = new victor(.5,.5).normalize()

console.log(direction)

direction.rotate(.1).normalize()

console.log(direction)