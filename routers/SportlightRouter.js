const express = require('express')
const { CreateSportlight,upload, GetSportlight } = require('../controllers/SportlightController')
const SportLightRouter = express.Router()

SportLightRouter.post('/sportlight', upload, CreateSportlight)
SportLightRouter.get('/sportlight', GetSportlight)

module.exports = SportLightRouter
