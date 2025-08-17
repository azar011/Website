const express = require('express')
const contactEnquiryRouter = express.Router()

const { addContactEnquiry, getContactEnquiry } = require('../controllers/contactEnquiryControllers')
contactEnquiryRouter.post('/addcontactenquiry', addContactEnquiry)
contactEnquiryRouter.get('/getcontactenquiry', getContactEnquiry)

module.exports = contactEnquiryRouter