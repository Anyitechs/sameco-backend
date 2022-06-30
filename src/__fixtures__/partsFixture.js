const genericFixture = require('./genericFixture');
const PartsRepository = require('../database/repositories/partsRepository');

const partsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PartsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = partsFixture;
