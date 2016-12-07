var $contButton 	= $('.contLessonButton'),
		$dynamicView 	= $('.dynamicView'),
		currentPlace = "start";

contLessonHandler = function() {
	console.log('current place', currentPlace);
	if (currentPlace === "start") {
		badCode();
		return;
	}
	if (currentPlace === "badCode") {
		goodCode();
		return;
	}
	if (currentPlace === "goodCode") {
		visibleModule();
		return;
	}
	if (currentPlace === "visibleModule") {
		codeSample();
		return;
	}
}

badCode = function() {
	$dynamicView.html('bad header will be here!');
	currentPlace = "badCode";
}

goodCode = function() {
	$dynamicView.html('Now it is the good header!');
	currentPlace = "goodCode";
}


visibleModule = function() {
	$dynamicView.html('this is when we can see the actual header');
	currentPlace = "visibleModule"
}

codeSample = function() {
	$dynamicView.html('and here is the code sampe');
	currentPlace = "done";
}


$contButton.click(contLessonHandler);