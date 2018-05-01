describe('unspinningDancer', function() {

  var unspinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    unspinningDancer = new makeUnspinningDancer(10, 20, timeBetweenSteps);
  });

  it('should not create a new node', function() {
    expect(unspinningDancer.$node).to.be.undefined;
  });

  it('should call a function called unspin', function() {
    sinon.spy(unspinningDancer, 'unspin');
    unspinningDancer.unspin()
    expect(unspinningDancer.unspin.called).to.be.true;
  });
});
