var firstRover = new roverObject();
var secondRover = new roverObject();

firstRover.name = 'First Rover';
secondRover.name = 'Second Rover';

$(function() {

	$('button[type="submit"]').click(function(e){
		e.preventDefault();
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
		currentRoverObject.setFacingDirection();
		roverStatusReport(currentRoverObject.name);
		roverPositionReport(currentRoverObject.name, currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		case 'R': 
		currentRoverObject.setState(90);
		currentRoverObject.setFacingDirection();
		roverStatusReport(currentRoverObject.name);
		roverPositionReport(currentRoverObject.name, currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		case "M": 
		currentRoverObject.moveForward();
		currentRoverObject.setFacingDirection();
		roverStatusReport(currentRoverObject.name);
		roverPositionReport(currentRoverObject.name, currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		default:
			// alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
		}
	}

	function roverStatusReport (roverName){
		$('#roverStatus').html(roverName + ' has Rotated Left by 90 Degrees');
	}

	function roverPositionReport (roverName, position, direction){
		$('#currentPositioning').html(roverName + ' is currently located at ' + position + ' and facing ' + direction);
	}