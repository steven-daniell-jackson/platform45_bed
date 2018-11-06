function roverObject() {

  // Properties
  this.name = name;
  this.x = 0;
  this.y = 0;
  this.state = 0;

  // Methods
  this.moveForward = function(move) {
    return this.x + this.y + c;
  };

  this.getPostion = function() {
    return 'Position:  ' + this.x + ' , ' + this.y;
  };

  this.setState = function(state) {
    return this.state += state;
  };

}