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
			console.log(rightcontentAjaxUrl);
	    	  $dynamicView.html(data);
		});
	}
	
	currentPlace = newCurrentPlace;
	callback();
}

var actionHandler = function() {
	console.log('current place', currentPlace);
	if (currentPlace === "start") {
	     generateView("partials/leftSide/unitOne.html", "partials/rightSide/prepHeaderLesson.html", "headerLessonStart", function() { $mainButton.html('Continue Lesson'); })
	     return;
	}
	if (currentPlace === "headerLessonStart") {
		 generateView(null, "partials/rightSide/headerBad.html", "badCode", function() { $mainButton.html('Continue Lesson'); })
	     return;
	}
	if (currentPlace === "badCode") {
		 generateView(null, "partials/rightSide/headerMedium.html", "goodCode", function() { $mainButton.html('Continue Lesson'); })
	     return;
	}
	if (currentPlace === "goodCode") {
	generateView(null, "partials/rightSide/headerGood.html", "visibleModule", function() { $mainButton.html('Continue Lesson'); })
		return;
	}
	if (currentPlace === "visibleModule") {
		codeSample();
		return;
	}
}

$mainButton.click(actionHandler);