Meteor.startup(function () {
    $(document).ready(function() {
        
        $('#canverse').canverseKit();
        $('#canverse').canverseKit("spawnLayout", {
            class:"row",
            tag:"section",
            toolbox:false
        });/* */
        
    });
});
































/*
$(document).ready(function() {
  // Handler for .ready() called.
  var cube = $("<div>");
  cube.attr("id", "cube");
    $("body").append("Use Arrow Keys To Navigate");
  $("body").append(cube);

  
  var step = $("<div>").addClass("step");
  
  var frontStep = step.clone();
  frontStep.text("WELCOME TO");
  frontStep.attr({
      id: "front",
      "data-z": -1000,
      "data-up": "#top",
      "data-down": "#bottom"
  });
  
  var leftStep = step.clone();
  
  var fiddleFrame = $("<iframe />")
  .css({
      width: "100%",
      height:"100%"
  })
  .attr({
      src: "http://jsfiddle.net/rniemeyer/Wjjnd/embedded/"
  });
  
      
  
  leftStep.append(fiddleFrame);
  leftStep.attr({
      id: "left",
      "data-rotate-y": 270,
      "data-z": -1500,
      "data-x": -500,
      "data-up": "#top",
      "data-down": "#bottom"
      
    
  });
  
  var rightStep = step.clone();
  rightStep.text("CAPSTONE PROJECT");
  rightStep.attr({
      id: "right",
      "data-rotate-y": 90,
      "data-z": -1500,
      "data-x": 500,
      "data-up": "#top",
      "data-down": "#bottom"
      
  });
  
  var backStep = step.clone();
  backStep.text("UNDER CONSTRUCTION");
  backStep.attr({
      id: "back",
      "data-rotate-y": 180,
      "data-z": -2000,
      "data-up": "#top",
      "data-down": "#bottom"
  });
  
  
  var topStep = step.clone();
  topStep.text("KEEP CHECKING BACK");
  topStep.attr({
      id: "top",
      "data-rotate-x": 90,
      "data-z": -1500,
      "data-y":-500,
      "data-up": "#back",
      "data-down": "#front"
  });
  
  var bottomStep = step.clone();
  bottomStep.text("TO FIND OUT MORE!!");
  bottomStep.attr({
      id:"bottom",
      "data-rotate-x": 270,
      "data-z": -1500,
      "data-y": 500,
      "data-up": "#front",
      "data-down": "#back"
  });
  
  cube.append(frontStep);
  cube.append(rightStep);
  cube.append(backStep);
  cube.append(leftStep);
  cube.append(topStep);
  cube.append(bottomStep);
  
    var cubeJmpress = $('#cube');
	$.jmpress("initStep", function(step, eventData) {
		eventData.stepData.up = eventData.data.up;
		eventData.stepData.down = eventData.data.down;
	});
	$.jmpress("register", "up", function() {
		var stepData = cube.jmpress("active").data("stepData");
		if(stepData.up)
			cube.jmpress("select", stepData.up);
	});
	$.jmpress("register", "down", function() {
		var stepData = cube.jmpress("active").data("stepData");
		if(stepData.down)
			cube.jmpress("select", stepData.down);
	});
	cubeJmpress.jmpress({
		viewPort: {
			width: 2000,
			height: 2000
		},
		keyboard: {
			keys: {
				38: "up",
				40: "down"
			}
		}
	});
	cube.jmpress("route", ["#left", "#front"]);
	cube.jmpress("route", ["#top", "#right"], true);
	cube.jmpress("route", ["#top", "#left"], true, true);
	cube.jmpress("route", ["#bottom", "#left"], true, true);
	cube.jmpress("route", ["#bottom", "#right"], true);

  
});
*/


//Bootstrap Body Attributes
$(document).ready(function() {
    $("body").attr({
        class:"preview",
        id:"top",
        "data-spy":"scroll",
        "data-target":".subnav",
        "data-offset":80
    });
    $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
});