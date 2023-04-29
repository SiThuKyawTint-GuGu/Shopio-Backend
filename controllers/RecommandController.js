
const RecommandModel = require('../models/RecommandModel')
const multer = require('multer');


//Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    }
})

const upload = multer({
    storage: storage,
}).single('image');


// Create Recommand Items
const CreateRecommandItems =  (req, res) => {
    const Recommand = new RecommandModel({
        title: req.body.title,
        pricedollar: req.body.pricedollar,
        pricecent : req.body.pricecent,
        image: req.file.filename
    })
    Recommand.save().then((res) => {
        res.status(200).json(Recommand)
    }).catch((err) => {
        res.status(400).json({ err: err.message })
    })
}

//Get all Recommand
const GetallRecommand = async (req, res) => {
    try {
        const getalldata = await RecommandModel.find({}).sort({_id:1})
        res.status(200).json(getalldata)
    } catch (err) {
        res.status(401).json({err:err.message})
    }
}


module.exports = { CreateRecommandItems,GetallRecommand,upload }
