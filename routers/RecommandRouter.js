const express = require('express');
const { CreateRecommandItems, GetallRecommand,upload } = require('../controllers/RecommandController');
const RecommandRouter = express.Router();


RecommandRouter.post('/recommand', upload,CreateRecommandItems)
RecommandRouter.get('/recommand', GetallRecommand)

module.exports = RecommandRouter;