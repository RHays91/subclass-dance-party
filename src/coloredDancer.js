var ColoredDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColoredDancer.prototype = Object.create(Dancer.prototype);
ColoredDancer.prototype.constructor = ColoredDancer;

ColoredDancer.prototype.step = function(){
  var colorArray = ["10px solid red","10px solid green","10px solid blue"];
  var color = colorArray[Math.floor(Math.random()*4)];
  Dancer.prototype.step.call(this);
  var styleSettings = {
    backgroundColor : color
  };
  this.$node.css( "border", color );
};