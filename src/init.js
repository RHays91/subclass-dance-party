$(document).ready(function(){
  window.dancers = [];
  var dancerFactory = new DancerFactory();


  var lineUpDancers = function(event){
    var centerHeight = $("body").height()/2;
    var centerWidth = $("body").width()/(dancers.length+1);
    for (var i = 0; i < dancers.length; i++) {

      dancers[i].setPosition(centerHeight,centerWidth*(i+1));

    }
  };

  $(".addCatButton").on("click", function(event){

    // make a dancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"CatDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineupDancerButton").on("click", function(event){
    lineUpDancers();
  });

  $(".addDancerButton").on("click", function(event){

    // make a dancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"BlinkyDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpDancersButton").on("click", lineUpDancers);
});
