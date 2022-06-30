module.exports = (app) => {
  app.post(`/vehicles`, require('./vehiclesCreate'));
  app.put(`/vehicles/:id`, require('./vehiclesUpdate'));
  app.post(`/vehicles/import`, require('./vehiclesImport'));
  app.delete(`/vehicles`, require('./vehiclesDestroy'));
  app.get(
    `/vehicles/autocomplete`,
    require('./vehiclesAutocomplete'),
  );
  app.get(`/vehicles`, require('./vehiclesList'));
  app.get(`/vehicles/:id`, require('./vehiclesFind'));
};
