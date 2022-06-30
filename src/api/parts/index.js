module.exports = (app) => {
  app.post(`/parts`, require('./partsCreate'));
  app.put(`/parts/:id`, require('./partsUpdate'));
  app.post(`/parts/import`, require('./partsImport'));
  app.delete(`/parts`, require('./partsDestroy'));
  app.get(
    `/parts/autocomplete`,
    require('./partsAutocomplete'),
  );
  app.get(`/parts`, require('./partsList'));
  app.get(`/parts/:id`, require('./partsFind'));
};
