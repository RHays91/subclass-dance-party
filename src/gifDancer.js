var GifDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://rs143.pbsrc.com/albums/r146/sconti1369/Funny_Pictures_Animated_Dancing_Cat.gif~c200">');
};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;
