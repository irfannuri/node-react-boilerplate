/**
 * Created by irfan on 04/01/2017.
 */
"use strict";

describe("Service Provider", function(){

  it("getBasicService should return a Basic Service", function(){

    let BasicService = require('services/basicService/basicService');
    let service = require("services/basicService/serviceProvider").getBasicService();
    expect(service).toEqual(jasmine.any(BasicService));
  });

});

