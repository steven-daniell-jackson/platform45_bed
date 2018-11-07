
console.log(allRoversObjArray);
$(function() {

	$('form#createRover').submit(function(e){
	e.preventDefault();

var roverName = $('input[name="roverName"]').val();
var roverPosition = $('input[name="roverPosition"]').val();
var roverDirection = $('select option:selected').val();

createRoverObj(roverName, roverPosition, roverDirection);
	console.log(allRoversObjArray);

$('.roverCreationStatus').html(roverName + ' has been created successfully');

	});

$('button[name="runCommand"]').click(function(e){
		var currentRoverIndex = getCurrentRoverIndex();

		switch (currentRoverIndex) { 
			case 0: 
			currentState =  doCommand(firstRover);
			break;
			case 1: 
			currentState =  doCommand(secondRover);
			break;
			default:
			alert('ERROR:  How did you even get here?');
		}

	});


});