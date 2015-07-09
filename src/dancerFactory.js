var DancerFactory = function(){

};

DancerFactory.prototype.createDancer = function(top,left,timeBetweenSteps,option){
  switch(option){
    case "BlinkyDancer":
      var blinkyDancer = new BlinkyDancer(top,left,timeBetweenSteps);
      blinkyDancer.step();
      return blinkyDancer;
    case "ColoredDancer":
      var coloredDancer = new ColoredDancer(top,left,timeBetweenSteps);
      coloredDancer.step();
      return coloredDancer;
    case "MovingDancer":
      var movingDancer = new MovingDancer(top,left,timeBetweenSteps);
      movingDancer.step();
      return movingDancer;
    case "CatDancer":
      var catDancer = new CatDancer(top,left,timeBetweenSteps);
      catDancer.step();
      return catDancer;
  }
  return new Dancer(top,left,timeBetweenSteps);
};