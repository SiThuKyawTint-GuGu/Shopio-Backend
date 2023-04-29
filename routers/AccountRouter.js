const express = require('express');
const { CreateAccount, Loginaccount } = require('../controllers/AccountController');
const AccountRouter = express.Router();

AccountRouter.post('/', CreateAccount);
AccountRouter.post('/login', Loginaccount)

module.exports = AccountRouter;