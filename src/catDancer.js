var CatDancer = function(top, left, timeBetweenSteps){
  this.redDot;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="cat-dancer" src="cat.gif">');

  var styleSettings = {

    top: top,
    left: left,
  };
  this.$node.css(styleSettings);

  this.$node.hover(function() { 
    var src = "catLeader.gif";
    $(this).attr("src", src);
  }, function() {
    var src = "cat.gif";
    $(this).attr("src", src);
  });
}

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;
