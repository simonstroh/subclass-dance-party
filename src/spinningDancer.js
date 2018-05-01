var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  setTimeout(this.spin.bind(this), timeBetweenSteps);
  setTimeout(this.unspin.bind(this), timeBetweenSteps + 300);
}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.spin = function() {
  var styleSettings = {
    transform: 'rotate(180deg)'
  }
  this.$node.css(styleSettings);
}

makeSpinningDancer.prototype.unspin = function() {
  var styleSetting = {
    transform: 'rotate(0deg)'
  }
  this.$node.css(styleSetting)
}
