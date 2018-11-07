
console.log(allRoversObjArray);
$(function() {

// Rover Creation Listeners

$('form#createRover').submit(function(e){
	e.preventDefault();

	var roverName = $('input[name="roverName"]').val();
	var roverPosition = $('input[name="roverPosition"]').val();
	var roverDirection = $('select option:selected').text();
	var roverState = $('select option:selected').val();
	var roverPositionX = roverPosition.split(',')[0];
	var roverPositionY = roverPosition.split(',')[1];

	createRoverObj(roverName, roverPositionX, roverPositionY, roverState, roverDirection);
	console.log(allRoversObjArray);

	$('.roverCreationStatus').html(roverName + ' has been created successfully');

});

$('button[name="releaseRovers"]').click(function(e){
	$('div#createRover.container').hide();
	$('div#roverCommandLine.container').show();
	generateRoverRadioButtons();
});


// Command Line listeners

$('button[name="runCommand"]').click(function(e){
	var currentRoverIndex = getCurrentRoverIndex();

console.log(currentRoverIndex);

	// switch (currentRoverIndex) { 
	// 	case 0: 
	// 	currentState =  doCommand(firstRover);
	// 	break;
	// 	case 1: 
	// 	currentState =  doCommand(secondRover);
	// 	break;
	// 	default:
	// 	alert('ERROR:  How did you even get here?');
	// }

});
});

function generateRoverRadioButtons(){
	allRoversObjArray.forEach(function(rover) {

		var inputHTML = '<input class="form-check-input" type="radio" name="rovers" id="' + rover.name + '">';
		var labelHTML = '<label class="form-check-label" for="' + rover.name + '">' + rover.name + '</label>'
		console.log(rover);


		$('div.radio-group').append(inputHTML).append(labelHTML);
	});
}