require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const FlashlistRouter = require('./routers/FlashsaleRouter');
const RecommandRouter = require('./routers/RecommandRouter');
const AccountRouter = require('./routers/AccountRouter');
const InfoRouter = require('./routers/InfoRouter');
const SportLightRouter = require('./routers/SportlightRouter');
const FooterRouter = require('./routers/FooterRouter');

app.use(express.static('uploads'));
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//Router
app.use('/api', AccountRouter)
app.use('/api', FlashlistRouter)
app.use('/api', RecommandRouter)
app.use('/api', InfoRouter)
app.use('/api', SportLightRouter)
app.use('/api',FooterRouter)


mongoose.connect(process.env.MONGODB_URI).then(
    () => {
        app.listen(4000,'192.168.1.2', () => {
            console.log('Hello')
        })
    }).catch((error) => {
        console.log(error);
    })
