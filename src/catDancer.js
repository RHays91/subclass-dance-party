var CatDancer = function(top, left, timeBetweenSteps){
  this.redDot;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="cat.gif">');

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;
