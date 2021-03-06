const express = require('express');

const OngControler = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngControler.index);
routes.post('/ongs',OngControler.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);

module.exports = routes;