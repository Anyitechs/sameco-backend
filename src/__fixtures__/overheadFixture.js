const genericFixture = require('./genericFixture');
const OverheadRepository = require('../database/repositories/overheadRepository');

const overheadFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new OverheadRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = overheadFixture;
