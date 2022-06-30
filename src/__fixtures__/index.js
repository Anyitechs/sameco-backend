const userFixture = require('./userFixture');
const partsFixture = require('./partsFixture');
const vehiclesFixture = require('./vehiclesFixture');
const overheadFixture = require('./overheadFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  parts: partsFixture,
  vehicles: vehiclesFixture,
  overhead: overheadFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
