const { reset } = require('nodemon');
const Account = require('../models/AccountModel');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jsonToken = require('jsonwebtoken')

//create Account
const CreateAccount = async (req, res) => {
    const saltRounds = 10; 
    const { username, email, password } = req.body
    if (password === null) {
        res.status(401).json({error:"need"})
    } else {
          bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        } else {
            try {
                const createAccountData = await Account.create({ username, email, password:hash });
                res.status(200).json(createAccountData);
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        }
    });
    }
   
}

//Create Token
const createToken = (userId) => {
    const token = jsonToken.sign({ userId }, 'sithu_token', { expiresIn: '24h' })
    return token;
}

//LoginAccount
const Loginaccount = async (req, res) => {
    const { email, password } = req.body;

    const user = await Account.findOne({ email })
    if (!user) {
        res.status(401).json({ error: 'Username or Password is not incorrect!' });
        return;
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (result) {
            const token = createToken(user._id)
            res.status(200).json({ message: 'Login successful', data: user ,token:token});
        } else {
            res.status(401).json({ error: 'Username or Password is not incorrect!' });
        }
    });
}


module.exports = {CreateAccount,Loginaccount}