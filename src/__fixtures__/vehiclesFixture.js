const genericFixture = require('./genericFixture');
const VehiclesRepository = require('../database/repositories/vehiclesRepository');

const vehiclesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new VehiclesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = vehiclesFixture;
