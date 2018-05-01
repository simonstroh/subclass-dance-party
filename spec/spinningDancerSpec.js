describe('spinningDancer', function() {

  var spinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new makeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a node that is instatiated', function() {
    function checkNode(node) {
      if (node.$node) {
        return true
      } else {
        return false
      }
    }
    expect(checkNode(spinningDancer)).to.be.true;
  });

  describe('dance', function() {
    it('should have position for the top and left of the node', function() {
      var newSpinningDancer = new makeSpinningDancer(10, 100, 100)
      expect(newSpinningDancer.top).to.equal(10);
      expect(newSpinningDancer.left).to.equal(100);
    });
  });
});
