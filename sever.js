require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const AccountRouter = require('./routers/router')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/accounts', AccountRouter)

mongoose.connect(process.env.MONGODB_URI).then(
    () => {
        app.listen(4000,'192.168.100.10', () => {
            console.log('Hello')
        })
    }).catch((error) => {
        console.log(error);
    })


