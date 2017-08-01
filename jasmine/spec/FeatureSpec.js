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
  it('prevents take off when the weather is stormy', function() {
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeOff(airport);}).toThrowError('No clearance for takeoff during stormy weather');
    expect(airport.planes()).toContain(plane);
  });
});
