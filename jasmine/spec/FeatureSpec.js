"use strict";

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('allows planes to land at airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('instructs a plane to take off', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});
