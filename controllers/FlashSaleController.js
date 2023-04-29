const FlashSaleModel = require('../models/FlashSaleModel')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'./uploads')
    },
    filename: (req, file, cb) => {
        cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
    }
})

const upload = multer({
    storage:storage
}).single('image')

//Create FlashSale
const CreateFalshSale =  (req, res) => {
    const FlashSale = new FlashSaleModel({
        percentage: req.body.percentage,
        normalprice: req.body.normalprice,
        discountprice: req.body.discountprice,
        title:req.body.title,
        image:req.file.filename
    })
    FlashSale.save().
        then((res) => {
        res.status(200).json({message:'Successfully Created'})
        }).catch((err) => {
        res.status(400).json({err:err.message})
    })
}

//Get FlashSale Item
const GetFlashSale = async (req, res) => {
    try {
        const getdata = await FlashSaleModel.find({}).sort({ createdAt: -1 })
        res.status(200).json(getdata)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports ={CreateFalshSale,upload,GetFlashSale}