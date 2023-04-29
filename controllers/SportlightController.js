const SportlightModel = require('../models/SportlightModel')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname)
    }
})

const upload = multer({
    storage: storage
}).single('image')

//Create SportLight
const CreateSportlight = (req, res) => {
    const SportLightCreate = new SportlightModel({
        title1: req.body.title1,
        title2: req.body.title2,
        image: req.file.filename
    })
    SportLightCreate.save().
        then((res) => {
            res.status(200).json({ message: 'Successfully Created' })
        }).catch((err) => {
            res.status(400).json({ err: err.message })
        })
}

//Get SportLight Item
const GetSportlight = async (req, res) => {
    try {
        const getdata = await SportlightModel.find({}).sort({ createdAt: 1 })
        res.status(200).json(getdata)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { CreateSportlight, upload, GetSportlight }