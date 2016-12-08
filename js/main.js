var $mainButton         = $('.mainActionButton'),
    $leftSideContent    = $('.leftSection__content'),
    $dynamicView		= $('.dynamicView'),
    currentPlace        = 'start';

var generateView = function (leftContentAjaxUrl, rightcontentAjaxUrl, newCurrentPlace, callback) {
	if (leftContentAjaxUrl) {
		$.get( leftContentAjaxUrl, function( data ) {
	    	  $leftSideContent.html( data );
		});
	}
	
	if (rightcontentAjaxUrl) {
		$.get( rightcontentAjaxUrl, function( data ) {
	    	  $dynamicView.html(data);
		});
	}
	
	currentPlace = newCurrentPlace;
	callback();
}

var actionHandler = function() {
	console.log('current place', currentPlace);
	if (currentPlace === "start") {
	     generateView("partials/unitOne.html", null, "headerLessonStart", function() { $mainButton.html('Continue Lesson'); })
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