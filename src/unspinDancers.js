var makeUnspinningDancer = function(top, left, timeBetweenSteps) {
  this.unspin()
}

makeUnspinningDancer.prototype = Object.create(makeDancer.prototype)
makeUnspinningDancer.prototype.constructor = makeUnspinningDancer;

makeUnspinningDancer.prototype.unspin = function() {
  var styleSetting = {
    transform: 'rotate(360deg)'
  }
  $('.dancer').css(styleSetting)
}