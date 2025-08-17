const contactEnquiryModel = require("../models/contactEnquiryModel")

const addContactEnquiry = async (req, res) => {
    try{
        const contactEnquiryData = contactEnquiryModel({
            contactEnquiryName : req.body.contactEnquiryName,
            contactEnquiryNumber : req.body.contactEnquiryNumber,
            contactEnquiryMessage : req.body.contactEnquiryMessage,
            contactEnquiryInterests : req.body.contactEnquiryInterests
        })
        await contactEnquiryData.save()
        res.status(200).send('Data is Added')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const getContactEnquiry = async (req, res) => {
    try{
        const contactEnquiryList = await contactEnquiryModel.find() 
        res.status(200).send(contactEnquiryList)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

module.exports = { addContactEnquiry, getContactEnquiry } 