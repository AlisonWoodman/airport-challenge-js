'use strict';

function Airport(){
  this._hangar = [];
}
Airport.prototype.planes = function() {
  return this._hangar;
};
Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('No clearance for landing during stormy weather');
  }
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error('No clearance for takeoff during stormy weather');
  }
  this._hangar = [];
};
Airport.prototype.isStormy = function() {
  return false;
};
