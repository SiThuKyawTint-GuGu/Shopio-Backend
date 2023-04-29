const express = require('express');
const { CreateFalshSale, upload, GetFlashSale } = require('../controllers/FlashSaleController');
const FlashlistRouter = express.Router();


FlashlistRouter.post('/flashsale', upload, CreateFalshSale)
FlashlistRouter.get('/flashsale',GetFlashSale)

module.exports = FlashlistRouter;