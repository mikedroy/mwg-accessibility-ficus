var $mainButton         = $('.mainActionButton'),
    $leftSideContent    = $('.leftSection__content'),
    currentPlace        = 'start';

var actionHandler = function() {
	console.log('current place', currentPlace);
	if (currentPlace === "start") {
	     $.get( "partials/unitOne.html", function( data ) {
    	  $leftSideContent.html( data );
    	  $mainButton.html('Continue Lesson');
    	  currentPlace = "headerLessonStart";
	});
	}
	if (currentPlace === "headerLessonStart") {
		badCode();
		testFunction();
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

$mainButton.click(actionHandler);