window.dancers = [];
window.cats = [];
var dancerFactory = new DancerFactory();
var movingDancer = null;
$(document).ready(function(){

  var lineUpDancers = function(){
    if (movingDancer !== null){
    movingDancer.$node.remove();
    movingDancer = null;
    }
    var centerHeight = $("body").height()/2;
    var centerWidth = $("body").width()/(cats.length+1);
    for (var i = 0; i < cats.length; i++) {
      cats[i].setPosition(centerHeight,centerWidth*(i+1));
    }
  };

  $(".cat").on("click", function(event){

    // make a catDancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"CatDancer"
      );
    window.dancers.push(dancer);
    window.cats.push(dancer);
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
    if(movingDancer === null){
      var dancer = dancerFactory.createDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 20,"MovingDancer"
        );
      dancer.chasers = cats;
      $('body').append(dancer.$node);
      movingDancer = dancer;
    }else{
      movingDancer.$node.remove();
      movingDancer = null;
    }
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

}).click(function(event) {
  var top = event.pageY;
  var left = event.pageX;
  if(movingDancer !== null){
    movingDancer.setPosition(top,left);
    movingDancer.changeChasersPosition(top,left);
  }
});
