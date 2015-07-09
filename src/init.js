$(document).ready(function(){
  window.dancers = [];
  var dancerFactory = new DancerFactory();

  var lineUpDancers = function(){
    var centerHeight = $("body").height()/2;
    var centerWidth = $("body").width()/(dancers.length+1);
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(centerHeight,centerWidth*(i+1));
    }
  };

  $(".feline").on("click", function(event){

    // make a catDancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"CatDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".blinker").on("click", function(event){

    // make a blinkyDancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"BlinkyDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".mover").on("click", function(event){

    // make a blinkyDancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"MovingDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".color").on("click", function(event){

    // make a blinkyDancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"ColoredDancer"
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineup").on("click", function(event){
    lineUpDancers();
  });

});
