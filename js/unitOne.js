var $contButton 	= $('.contLessonButton'),
	$helpButton		= $('.helpButton'),
	$dynamicView 	= $('.dynamicView'),
	currentPlace	= "start";


var badCode = function() {
	$dynamicView.html("bad header goes here");
	currentPlace = "badCode";
}

var goodCode = function() {
	$dynamicView.html('Now it is the good header!');
	currentPlace = "goodCode";
}


var visibleModule = function() {
	$dynamicView.html('this is when we can see the actual header');
	currentPlace = "visibleModule"
}

var codeSample = function() {
	$dynamicView.html('and here is the code sampe');
	currentPlace = "done";
}


var testFunction = function() {
	console.log('test function called!');
}