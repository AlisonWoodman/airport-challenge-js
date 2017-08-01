'use strict';
describe('Plane', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeoff']);
  });
  it('can land at the airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can take off from the airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
