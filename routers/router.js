const express = require('express');
const { CreateAccount, Loginaccount } = require('../controllers/AccountController');
const { InfoCreate } = require('../controllers/InfoController');

const router = express.Router();

//Account
router.post('/', CreateAccount);
router.post('/login', Loginaccount)
router.post('/info',InfoCreate)

module.exports = router;