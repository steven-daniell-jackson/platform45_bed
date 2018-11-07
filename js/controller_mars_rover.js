// Declare Objects Array
var allRoversObjArray = [];

// Debug Objects
// firstRover = createRoverObj('First', 0, 0, 0, 'North');
// secondRover = createRoverObj('Second', 1, 4, 180, 'South');

// New Rover Functions
function createRoverObj(name, x, y, state, facingDirection) {
	var newRover = new roverObject(name, x, y, state, facingDirection);
	allRoversObjArray.push(newRover);
}


// Do Command or throw error
function doCommand(currentRoverObject){

	var currentCommand = $("input[name='roverCommandLine']").val();

	switch (currentCommand) { 
		case 'L': 
		currentRoverObject.setState(-90);
		roverStatusReport(currentRoverObject.name, 'L', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection(), currentRoverObject.nextPostion());
		break;
		case 'R': 
		currentRoverObject.setState(90);
		roverStatusReport(currentRoverObject.name, 'R', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection(), currentRoverObject.nextPostion());
		break;
		case "M": 
		currentRoverObject.moveForward();
		roverStatusReport(currentRoverObject.name, 'M', currentRoverObject.getPostion(), currentRoverObject.getFacingDirection(), currentRoverObject.nextPostion());
		break;
		default:
		alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
	}
	console.log(currentRoverObject);
}


// Generate a Rover Report
function generateRoverReport(){
	$('div#roverReport').empty();
	$('div#roverReport').append("<h2>Rover Report:</h2>");

	allRoversObjArray.forEach(function(rover) {
		var reportWrapper = document.createElement("div");
		reportWrapper.className = 'reportWrapper alert alert-primary col-md-12 col-sm-4';

		var roverNameHTML = '<h3> Rover Name: ' + rover.name +'</h3>';
		var locationHTML = 'Currently Located at ' + rover.x + ',' + rover.y + ' and facing ' + rover.getFacingDirection();

		$('div#roverReport').append(reportWrapper);

		$('div.reportWrapper:last').append(roverNameHTML).append(locationHTML);

	});

}


// Generate a Rover Radio Buttons
function generateRoverRadioButtons(){

	allRoversObjArray.forEach(function(rover) {

		var radioWrapper = document.createElement("div");
		radioWrapper.addEventListener("click", setActiveRover);
		radioWrapper.className = 'radioWrapper col-md-12 col-sm-4';

		var inputHTML = '<input class="form-check-input" type="radio" name="rovers" id="' + rover.name + '">';
		var labelHTML = '<label class="form-check-label" for="' + rover.name + '">' + rover.name + '</label>'

		$('div.radio-group').append(radioWrapper);

		$('div.radioWrapper:last').append(inputHTML).append(labelHTML);

	});

}