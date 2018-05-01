var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  setTimeout(this.spin.bind(this), timeBetweenSteps);
}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.spin = function() {
  var styleSettings = {
    transform: 'rotate(180deg)'
  }
  this.$node.css(styleSettings);
}
