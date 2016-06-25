'use strict';
const aController = require('../app/controllers/aController');

module.exports.setupRoutes = function(server) {
  server.route([
    {method: 'GET',  path: '/page', config: aController.action}
  ]);
};
