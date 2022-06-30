module.exports = (app) => {
  app.post(`/overhead`, require('./overheadCreate'));
  app.put(`/overhead/:id`, require('./overheadUpdate'));
  app.post(`/overhead/import`, require('./overheadImport'));
  app.delete(`/overhead`, require('./overheadDestroy'));
  app.get(
    `/overhead/autocomplete`,
    require('./overheadAutocomplete'),
  );
  app.get(`/overhead`, require('./overheadList'));
  app.get(`/overhead/:id`, require('./overheadFind'));
};
