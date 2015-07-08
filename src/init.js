$(document).ready(function(){
  window.dancers = [];
  var dancerFactory = new DancerFactory();

  $(".addDancerButton").on("click", function(event){

    // make a dancer with a random position
    var dancer = dancerFactory.createDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,"GifDancer"
    );
    $('body').append(dancer.$node);
  });
});
