const CategoryModel = require('../models/CategoryModel')

//Create Category
const CreateCategory = async (req, res) => {
    const { name } = req.body
    
    try {
        const createCy = await CategoryModel.create({ name })
        res.status(200).json(createCy)
    } catch (err) {
        res.status(401).json({err:err.message})
    }
}

module.exports = {CreateCategory}