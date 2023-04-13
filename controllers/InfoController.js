
const Info = require('../models/InfoModel');

//create Info
const InfoCreate = async (req, res) => {
    const {user_id, location, language, currency } = req.body
    try {
        const CreateInfo = await Info.create({user_id, location, language, currency })
        res.status(200).json({ data: CreateInfo, message: "Successfully Created!" })
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports = {InfoCreate}