$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer)
    $('body').append(dancer.$node);
  });
  $('body').on('click', '.dancer', function(event) {
    var hypotenuses = []
    var closestDancers = []
    var dancerTop = event.clientY
    var dancerLeft = event.clientX
    for (let i = 0; i < window.dancers.length; i++) {
      var dancerDistanceTop = dancerTop - window.dancers[i].top
      var dancerDistanceLeft = dancerLeft - window.dancers[i].left
      var hypotenus = Math.sqrt(Math.pow(dancerDistanceTop, 2) + Math.pow(dancerDistanceLeft, 2))
      hypotenuses.push(hypotenus)
    }
    var newHypotenuses = hypotenuses.slice()
    newHypotenuses.sort(function(a, b) {
      return a - b;
    });
    var closestDancerIndex = hypotenuses.indexOf(newHypotenuses[0])
    var secondClosestDancerIndex = hypotenuses.indexOf(newHypotenuses[1])
    closestDancers.push(window.dancers[closestDancerIndex])
    closestDancers.push(window.dancers[secondClosestDancerIndex])
    closestDancers.forEach(function(i) {
      i.$node.css('top', '70px')
      i.spin()
    })
  })
});

