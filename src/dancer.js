// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"><div class="dancer"><div class="dancer-blumbot"><img src="https://www.dropbox.com/s/d6jtz7939fduihw/Sims4SpinningBlumbot.gif?raw=1" width="auto" height="60px"></div><div class="dancer-body"><img src="https://www.dropbox.com/s/qt8sbkis0fyktz1/dancer-man.gif?raw=1" width="auto" height="180px"></div></div></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
}