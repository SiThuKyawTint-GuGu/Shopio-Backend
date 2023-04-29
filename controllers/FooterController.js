const FooterModel = require('../models/FooterModel')

//Create Footer
const CreateFooter = async (req, res) => {
    const { title } = req.body
    
    try {
        const createfooteritem = await FooterModel.create({ title })
        res.status(200).json(createfooteritem)
    } catch (error) {
        res.status(400).json({err:err.message})
    }
}

//Get Footer Item
const GetFooter = async (req, res) => {
    try {
        const getfooteritem = await FooterModel.find()
        res.status(200).json(getfooteritem)
    } catch (error) {
        res.status(400).json({err:err.message})
    }
}

module.exports = {CreateFooter,GetFooter}