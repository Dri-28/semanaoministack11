const express = require('express');

const OngController= require ('./controllers/OngController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
    
    return response.json(ongs);




routes.post('/ongs', OngController.create);

module.exports = routes;