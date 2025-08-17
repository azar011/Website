import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const myContext = createContext()

const MyContextProvider = ({children}) => {

    const url = 'http://localhost:5000'

    // Service Data Fetching

    const [ serviceData, setServiceData ] = useState([])
    
    const fetchServiceData = async () => {
        try{
            const serviceList = await axios.get(`${url}/service/getservice`)
            setServiceData(serviceList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }
    
    useEffect(() => {
        fetchServiceData()
    }, [])

    // Contact Enquiry 

    const [contactEnquiryName, setContactEnquiryName] = useState("");
    const [contactEnquiryNumber, setContactEnquiryNumber] = useState("");
    const [contactEnquiryMessage, setContactEnquiryMessage] = useState("");
    const [selectedContactInterests, setSelectedContactInterests] = useState([]);

    const contactInterestsList = [
        "Data Science",
        "Web Design",
        "Web Development",
        "Full Stack",
        "Project",
        "Course",
        "Internship"
    ];

    const [contactEnquirySubmitted, setcontactEnquirySubmitted] = useState(false);
    
    const toggleInterest = (interest) => {
        setSelectedContactInterests((prev) =>
        prev.includes(interest)
            ? prev.filter((i) => i !== interest)
            : [...prev, interest]
        );
    };

    const contactEnquirySubmitForm = async (e) => {
        e.preventDefault();
        setcontactEnquirySubmitted(true);

        // Validation check
        if (
            !contactEnquiryName ||
            !contactEnquiryNumber ||
            !contactEnquiryMessage ||
            selectedContactInterests.length === 0
        ) {
            return;
        }

        try {
            const contactEnquiryData = {
                contactEnquiryName,
                contactEnquiryNumber,
                contactEnquiryMessage,
                contactEnquiryInterests: selectedContactInterests,
            };

            await axios.post(`${url}/contactenquiry/addcontactenquiry`, contactEnquiryData);

            setContactEnquiryName("");
            setContactEnquiryNumber("");
            setContactEnquiryMessage("");
            setSelectedContactInterests([]);
            setcontactEnquirySubmitted(false);

            toast.success('Form Submitted Successfully...')

        } 
        catch (err) {
            toast.error('Failed to Submit Form...')
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    };
    
    const myContextValue = {

        serviceData,

        contactEnquiryName, setContactEnquiryName, 
        contactEnquiryNumber, setContactEnquiryNumber, 
        contactEnquiryMessage, setContactEnquiryMessage, 

        selectedContactInterests, contactInterestsList, 
        contactEnquirySubmitted, toggleInterest, 
        contactEnquirySubmitForm
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider