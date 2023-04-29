const express = require('express')
const { CreateFooter, GetFooter } = require('../controllers/FooterController')

const FooterRouter = express.Router()

FooterRouter.post('/footer', CreateFooter);
FooterRouter.get('/footer', GetFooter);

module.exports = FooterRouter