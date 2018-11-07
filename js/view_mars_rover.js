
$(function() {
// Rover Creation Listeners

// Click event for "Create Rover" Button
$('form#createRover').submit(function(e){
	e.preventDefault();

	// Get Values for Object Property
	var roverName = $('input[name="roverName"]').val();
	var roverPosition = $('input[name="roverPosition"]').val();
	var roverDirection = $('select option:selected').text();
	var roverState = parseInt($('select option:selected').val());
	var roverPositionX = roverPosition.split(',')[0];
	var roverPositionY = roverPosition.split(',')[1];

	// Created Rover Object on HTML5 Validation
	createRoverObj(roverName, roverPositionX, roverPositionY, roverState, roverDirection);

	// Notify User of Rover Creation
	createRoverNotification(roverName, roverPosition, roverDirection);
});

// Click event for "Release Rovers" Button
$('button[name="releaseRovers"]').click(function(e){

// Check if Array is empty or undefined
if (allRoversObjArray === undefined || allRoversObjArray.length == 0) {
    alert('Please create a Rover before continuing');
} else {
	$('div#createRover.container').hide();
	$('div#roverCommandLine.container').show();
	generateRoverRadioButtons();
}
	// Dynamically Generate Radio Buttons
	
});


// Command Line listeners

// Click event for "Run Command" Button
$('button[name="runCommand"]').click(function(e){
	var currentRoverIndex = getCurrentRoverIndex();
	if (currentRoverIndex >= 0) {
	// Do inputted Command
	doCommand(allRoversObjArray[currentRoverIndex]);
} else {
	alert("Please select a Rover");
}

});

// Click event for "Rover Report" Button
$('button[name="roverReport"]').click(function(e){
	generateRoverReport();

});

// Click event for "Clear" Button
$('button[name="clear"]').click(function(e){
	$('div.roverStatusReport.alert-info').remove();
	

});

// Click event for "Run Command" Button
$('button[name="reset"]').click(function(e){
	allRoversObjArray = [];
	$('div#createRover.container').show();
	$('div#roverCommandLine.container').hide();
	$('span.roverCreationStatus').empty();
	$('div.radio-group').empty();
	$('div#roverReport').empty();
});


});

// Create Rover Notification
function createRoverNotification(name, position, roverDirection){

	$('.roverCreationStatus').append('<div class="alert alert-success" role="alert"><b>' + name + '</b> has been created successfully at ' + position + ' and facing ' + roverDirection + '</div>');

}

// Command Line Functions
function getCurrentRoverIndex(){
	var currentRover = $("input[name='rovers']");
	return currentRover.index(currentRover.filter(':checked'));
}



// Display and Set Active Rover
function setActiveRover(e) {

	var parent = $(this).closest("form");
	$(parent).find('.active').removeClass('active');

	$(this).addClass('active');
	$(this).addClass('active').find('input').attr('checked', true);
}




// Report Current Status
function roverStatusReport (roverName, command, position, direction, nextPostion){

	var roverStatusReport = document.createElement("div");
	roverStatusReport.className = 'roverStatusReport alert alert-primary col-md-12 col-sm-4';
	
	var currentStatusHTML = '<p><b>' + roverName + '</b> is currently located at ' + position + ' and facing ' + direction + '</p>';
	var reportHTML = "";


	switch (command) { 
		case 'L': 
		reportHTML = '<p><b>' + roverName + '</b> has Rotated Left by 90 Degrees</p>';
		break;
		case 'R': 
		reportHTML =  '<p><b>' + roverName + '</b> has Rotated Right by 90 Degrees</p>';
		break;
		case "M": 
		reportHTML = '<p><b>' + roverName + '</b> has moved forward</p>';
		break;
		default:
		alert('ERROR: How did you get here?');
	}


	$('div.roverCommandLineReport').after(roverStatusReport);
	$('div.roverStatusReport').addClass('alert-info').removeClass('alert-success');
	$('div.roverStatusReport:first').removeClass('alert-info').addClass(' alert-success').append(reportHTML).append(currentStatusHTML);

	
}

