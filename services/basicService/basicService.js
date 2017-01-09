/**
 * Created by irfan on 03/01/2017.
 */
var config = require('common/config.js');;

class BasicService {
  constructor(){
    console.log("Created Basic Service");
    this.dbUrl = config.dbUrl;
  }
}

module.exports = BasicService;