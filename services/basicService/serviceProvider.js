let basicService = require('./basicService');

/**
 * This service provider
 */
class ServiceProvider {
  constructor() {
    //TODO: Check env (node or browser) to decide service ?? (If to be isomorphic)
  }
  getBasicService(){
    return new basicService();
  }
}

module.exports = new ServiceProvider();