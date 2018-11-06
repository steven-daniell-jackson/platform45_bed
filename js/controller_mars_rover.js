var firstRover = new roverObject();
var secondRover = new roverObject();

firstRover.name = 'firstRover';
secondRover.name = 'secondRover';

$(function() {

	$('button[type="submit"]').click(function(e){
		e.preventDefault();

		var currentRoverIndex = getCurrentRoverIndex();
		// console.log("Command: " + getCommand());
		

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

		// firstRover.setState(0);
		// console.log(firstRover);

	});

});

function getCurrentRoverIndex(){
	var currentRover = $("input[name='rovers']");
	return currentRover.index(currentRover.filter(':checked'));
}

function doCommand(currentRoverObject){

	console.log(currentRoverObject);

	var currentCommand = $("input[name='roverCommandLine']").val();

	switch (currentCommand) { 
		case 'L': 
			currentRoverObject.setState(-90);
			break;
			case 'R': 
			currentRoverObject.setState(90);
			break;
			case "M": 
			currentRoverObject.moveForward();
			break;
			default:
			// alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
		}
	}