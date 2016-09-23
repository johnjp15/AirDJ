var controller = {enableGestures: true};

var regionTopLeft, regionTopRight, regionBottomRight, regionBottomLeft;
var position;

Leap.loop(controller, function(frame){
	if(frame.pointables.length > 0){
		var pointable = frame.pointables[0];
		position = pointable.tipPosition;
		document.getElementById("currentPointable").innerHTML = position;
	}
})


function debugPlane()	{
	plane = getEquationOfPlaneFromPoints(regionTopLeft, regionTopRight, regionBottomRight);
	console.log(plane);
}

document.onkeypress = function(event) {
	// console.log("keypress")
	if(event.keyCode == 49){
		console.log("1 pressed");
		regionTopLeft = position;
		document.getElementById("topLeft").innerHTML = regionTopLeft;
	}
	else if(event.keyCode == 50){
		console.log("2 pressed");
		regionTopRight = position;
		document.getElementById("topRight").innerHTML = regionTopRight;
	}
	else if(event.keyCode == 51){
		console.log("3 pressed");
		regionBottomRight = position;
		document.getElementById("botRight").innerHTML = regionBottomRight;
	}
	else if(event.keyCode == 52){
		console.log("4 pressed");
		regionBottomLeft = position;
		document.getElementById("botLeft").innerHTML = regionBottomLeft;
	}

	else if(event.keyCode == 68 || event.keyCode == 100)	{
		debugPlane();
	}
}