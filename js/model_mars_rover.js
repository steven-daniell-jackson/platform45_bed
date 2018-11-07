// Rover Object

function roverObject(name, x, y, state, facingDirection) {

  // Properties
  this.name = name;
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.state = state;
  this.facingDirection = facingDirection;



  // Methods
  
  // Method: Move Forward
  this.moveForward = function() {
    var direction = this.state / 90;

    switch (direction) { 
      case 0: 
      this.y = this.y + 1;
      break;
      case 1: 
      this.x = this.x + 1;
      break;
      case 2: 
      this.y = this.y - 1;
      break;
      case 3: 
      this.x = this.x - 1;
      break;
      default:
      alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
    }
  };

  // Method: Get Current Position
  this.getPostion = function() {
    return 'Position:  ' + this.x + ' , ' + this.y;
  };

  // Method: Get the next position
  this.nextPostion = function() {
    var direction = this.state / 90;
    nextPositionX = this.x;
    nextPositionY = this.y;

    switch (direction) { 
      case 0: 
      nextPositionY = this.y + 1;
      break;
      case 1: 
      nextPositionX = this.x + 1;
      break;
      case 2: 
      nextPositionY = this.y - 1;
      break;
      case 3: 
      nextPositionX = this.x - 1;
      break;
      default:
      alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
    }

    return 'Next Position:  ' + nextPositionX + ' , ' + nextPositionY;
  };

  // Method: Set the direction state
  this.setState = function(state) {
    this.state += state;
    this.setFacingDirection();
  };

// Method: Set current facing direction based on the directional state
this.setFacingDirection = function() {

  var direction = Math.abs(this.state);

  if (direction >= 360) {
    this.state = 0;
    direction = 0;
  } else {
    direction = direction / 90;
  }
  switch (direction) { 
    case 0: 
    this.facingDirection = 'North';
    break;
    case 1: 
    this.facingDirection = 'East';
    break;
    case 2: 
    this.facingDirection = 'South';
    break;
    case 3: 
    this.facingDirection = 'West';
    break;
    default:
    alert('setFacingDirection() ERROR!!!');
  }

};

// Method: Return Current Direction
this.getFacingDirection = function() {
  return this.facingDirection;
};


}