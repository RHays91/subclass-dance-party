var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="redDot"></span>');
  this.chasers = [];
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var dancer = this;
};
MovingDancer.prototype.changeChasersPosition = function(top,left){
  for (var i = this.chasers.length - 1; i >= 0; i--) {
    this.chasers[i].setPosition(top,left);
  };
}