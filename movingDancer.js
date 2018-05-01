var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeMovingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.top += Math.floor(Math.random() * 5);
  this.left += Math.floor(Math.random() * 20);
  this.setPosition();
  makeDancer.call(this, top, left, timeBetweenSteps)
}