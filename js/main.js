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
	     generateView("partials/leftSide/unitOneOverview.html", "partials/rightSide/getReadyUnitOne.html", "headerLessonStart", function() { $mainButton.html('Begin Lesson'); })
	     return;
	}
	if (currentPlace === "headerLessonStart") {
		 generateView("partials/leftSide/unitOneBad.html", "partials/rightSide/headerBad.html", "badHeaderCode", function() { $mainButton.html('Continue Lesson'); })
	     return;
	}
	if (currentPlace === "badHeaderCode") {
		 generateView("partials/leftSide/unitOneMedium.html", "partials/rightSide/headerMedium.html", "mediumHeaderCode", function() { $mainButton.html('Continue Lesson'); })
	     return;
	}
	if (currentPlace === "mediumHeaderCode") {
		generateView("partials/leftSide/unitOneGood.html", "partials/rightSide/headerGood.html", "goodHeaderCode", function() { $mainButton.html('Continue Lesson'); })
		return;
	}
	if (currentPlace === "goodHeaderCode") {
		generateView("partials/leftSide/headerOneWrapup.html", "partials/rightSide/headerSampleCode.html", "gridStart", function() { $mainButton.html('Begin Unit 2'); })
		return;
	}
	if (currentPlace === "gridStart") {
		generateView("partials/leftSide/gridOverview.html", "partials/rightSide/gridBad.html", "gridBad", function() { $mainButton.html('Continue Lesson'); })
		return;
	}
	if (currentPlace === "gridBad") {
		generateView("partials/leftSide/gridBad.html", "partials/rightSide/gridBad.html", "gridGood", function() { $mainButton.html('Continue Lesson'); })
		return;
	}
	if (currentPlace === "gridGood") {
		generateView("partials/leftSide/goodGood.html", "partials/rightSide/gridGood.html", "gridCodeSample", function() { $mainButton.html('Continue Lesson'); })
		return;
	}
/*  if (currentPlace === "gridVisible") {
    generateView("partials/leftSide/goodGood.html", "partials/rightSide/gridVisible.html", "gridCodeSample", function() { $mainButton.html('Continue Lesson'); })
    return;
  }*/
  if (currentPlace === "gridCodeSample") {
    generateView("partials/leftSide/unitTwoWrapup.html", "partials/rightSide/gridCodeSample.html", "start", function() { $mainButton.html('Back to Beginning'); })
    return;
  }
}

$mainButton.click(actionHandler);
