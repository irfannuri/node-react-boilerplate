/**
 * Created by irfan on 04/01/2017.
 */

describe("Service Provider", function(){

  it("getBasicService should return a Basic Service", function(){
    "use strict";
    let BasicService = require('services/basicService/basicService');
    let service = require("services/basicService/serviceProvider").getBasicService();
    expect(service).toEqual(jasmine.any(BasicService));
  });

});

