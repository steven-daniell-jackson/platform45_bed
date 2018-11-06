function roverObject() {

  // Properties
  this.name = name;
  this.x = 0;
  this.y = 0;
  this.state = 0;
  this.facingDirection = 'North';

  // Methods
  this.moveForward = function() {
    var direction = this.state;

    if (direction % 360 == 0 ) {
      direction = 0;
    } else {
      direction = direction / 90;
    }

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

  this.getPostion = function() {
    return 'Position:  ' + this.x + ' , ' + this.y;
  };

  this.nextPostion = function() {
    return 'Position:  ' + this.x + ' , ' + this.y;
  };

  this.setState = function(state) {
    return this.state += state;
  };


  this.setFacingDirection = function() {
    var direction = this.state;

    if (this.state >= 360) {
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
      // alert('ERROR: Only L(Left), R(Right) and M(Move) are accepted');
    }

  };

  this.getFacingDirection = function() {
    return this.facingDirection;
  };


}