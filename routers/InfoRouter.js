const express = require('express');
const { InfoCreate } = require('../controllers/InfoController');
const InfoRouter = express.Router();

InfoRouter.post('/info', InfoCreate)

module.exports =InfoRouter