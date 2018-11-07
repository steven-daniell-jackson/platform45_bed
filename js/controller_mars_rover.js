var allRoversObjArray = [];

var firstRover = new roverObject();
var secondRover = new roverObject();

firstRover.name = 'First Rover';
secondRover.name = 'Second Rover';


allRoversObjArray.push(firstRover);
allRoversObjArray.push(secondRover);

// New Rover Functions

function createRoverObj(name, startingPosition, facingDirection) {
	var newRover = new roverObject(name, 0,0, 0, facingDirection);
	allRoversObjArray.push(newRover);
}




// Command Line Functions

function getCurrentRoverIndex(){
	var currentRover = $("input[name='rovers']");
	return currentRover.index(currentRover.filter(':checked'));
}

function doCommand(currentRoverObject){

	var currentCommand = $("input[name='roverCommandLine']").val();

	switch (currentCommand) { 
		case 'L': 
		currentRoverObject.setState(-90);
		roverStatusReport(currentRoverObject.name, 'L', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		case 'R': 
		currentRoverObject.setState(90);
		roverStatusReport(currentRoverObject.name, 'R', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		case "M": 
		currentRoverObject.moveForward();
		roverStatusReport(currentRoverObject.name, 'M', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection());
		break;
		default:
		alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
	}
		console.log(currentRoverObject);
}

function roverStatusReport (roverName, command, position, direction){

	$('#currentPositioning').html(roverName + ' is currently located at ' + position + ' and facing ' + direction);

	switch (command) { 
		case 'L': 
		$('#roverStatus').html(roverName + ' has Rotated Left by 90 Degrees');
		break;
		case 'R': 
		$('#roverStatus').html(roverName + ' has Rotated Right by 90 Degrees');
		break;
		case "M": 
		$('#roverStatus').html(roverName + ' has moved forward');
		break;
		default:
		alert('ERROR: How did you get here?');
	}

	
}

