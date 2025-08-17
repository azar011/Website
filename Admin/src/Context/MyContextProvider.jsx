import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
    
    // Backend URL

    const url = "http://localhost:5000";

    const navigate = useNavigate();

    const [serviceTitle, setSeriviceTitle] = useState("");
    const [serviceOldPrice, setSeriviceOldPrice] = useState("");
    const [serviceNewPrice, setSeriviceNewPrice] = useState("");
    const [serviceDiscount, setSeriviceDiscount] = useState("");
    const [serviceDescription, setSeriviceDescription] = useState("");
    const [serviceFeatures, setSeriviceFeatures] = useState([]);

    // Add new feature
    const addServiceFeature = () => {
        setSeriviceFeatures([...serviceFeatures, ""]);
    };

    // Remove a feature by index
    const removeServiceFeature = (index) => {
        const updated = serviceFeatures.filter((_, i) => i !== index);
        setSeriviceFeatures(updated);
    };

    // Update feature text
    const updateServiceFeature = (index, value) => {
        const updated = [...serviceFeatures];
        updated[index] = value;
        setSeriviceFeatures(updated);
    };

    // Service Add Function

    const serviceAddFun = (e) => {
        try {
            e.preventDefault();

            const serviceData = {
                serviceTitle,
                serviceOldPrice,
                serviceNewPrice,
                serviceDiscount,
                serviceDescription,
                serviceFeatures,
            };

            axios.post(`${url}/service/addservice`, serviceData);

            toast.success("Service Added Successfully...", {
                autoClose: 1500,
            });

            navigate("/servicelist");

            setTimeout(() => {
                window.location.reload();
            }, 2000);

            setSeriviceTitle("");
            setSeriviceOldPrice("");
            setSeriviceNewPrice("");
            setSeriviceDiscount("");
            setSeriviceDescription("");
            setSeriviceFeatures([""]);

        } 
        catch (err) {
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
            toast.error("Failed to Add Service");
        }
    };

    // Service List

    const [serviceData, setServiceData] = useState([]);

    const fetchServiceData = async () => {
        try {
            const serviceList = await axios.get(`${url}/service/getservice`);
            setServiceData(serviceList.data);
        } catch (err) {
            console.log("Error fetching services:", err.message);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    // Service Delete Fun

    const serviceDeleteFun = async (serviceID) => {
        toast.info(
            <div className="flex flex-col gap-3">
                <span className="font-semibold">Are you sure you want to delete?</span>
                <div className="flex gap-2">
                    <button
                        onClick={async () => {
                        try {
                            await axios.delete(`${url}/service/deleteservice/${serviceID}`);
                            toast.success("Service Deleted Successfully...", {
                            autoClose: 1500,
                            });
                            setTimeout(() => {
                            window.location.reload();
                            }, 2000);
                        } 
                        catch (err) {
                            toast.dismiss();
                            toast.error("Failed to Delete Service");
                        }}}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                        Yes
                    </button>
                    <button onClick={() => toast.dismiss()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md">
                        No
                    </button>
                </div>
            </div>,
            { autoClose: false, closeOnClick: false }
        );
    };

    // Service Update

    const [updateServiceTitle, setUpdateServiceTitle] = useState("");
    const [updateServiceOldPrice, setUpdateServiceOldPrice] = useState("");
    const [updateServiceNewPrice, setUpdateServiceNewPrice] = useState("");
    const [updateServiceDiscount, setUpdateServiceDiscount] = useState("");
    const [updateServiceDescription, setUpdateServiceDescription] = useState("");
    const [updateServiceFeatures, setUpdateServiceFeatures] = useState([]);

    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    const [ updateServiceID, setUpdateServiceID ] = useState('')

    const serviceModalFun = (serviceID) => {
        const service = serviceData.find((a) => a._id === serviceID)

        if (service) {
            setUpdateServiceTitle(service.serviceTitle);
            setUpdateServiceOldPrice(service.serviceOldPrice);
            setUpdateServiceNewPrice(service.serviceNewPrice);
            setUpdateServiceDiscount(service.serviceDiscount);
            setUpdateServiceDescription(service.serviceDescription);
            setUpdateServiceFeatures([...service.serviceFeatures]); 
            setUpdateServiceID(service._id)
        }

        setIsServiceModalOpen(true);
    }

    const serviceUpdateFun = async (e) => {
        try{
            e.preventDefault()

            const updateServiceData = {
                serviceTitle : updateServiceTitle,
                serviceOldPrice : updateServiceOldPrice,
                serviceNewPrice : updateServiceNewPrice,
                serviceDiscount : updateServiceDiscount,
                serviceDescription : updateServiceDescription,
                serviceFeatures : updateServiceFeatures
            }

            await axios.put(`${url}/service/updateservice/${updateServiceID}`, updateServiceData)
            toast.success("Service updated successfully!", { autoClose: 2000 });
            setIsServiceModalOpen(false);

            fetchServiceData();
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
            toast.error("Failed to Update Service");
        }
    }

    // Contact Enquiry 

    const [ contactEnquiryData, setContactEnquiryData ] = useState([])

    const fetchContactEnquiryData = async () => {
        try{
            const contactEnquiryList = await axios.get(`${url}/contactenquiry/getcontactenquiry`)
            setContactEnquiryData(contactEnquiryList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`);
        }
    }

    useEffect(() => {
        fetchContactEnquiryData()
    }, [])

    const myContextValue = {
        serviceTitle,
        setSeriviceTitle,
        serviceOldPrice,
        setSeriviceOldPrice,
        serviceNewPrice,
        setSeriviceNewPrice,
        serviceDiscount,
        setSeriviceDiscount,
        serviceDescription,
        setSeriviceDescription,

        serviceFeatures,
        addServiceFeature,
        removeServiceFeature,
        updateServiceFeature,

        serviceAddFun,
        serviceData,
        serviceDeleteFun,

        serviceModalFun, 
        isServiceModalOpen, setIsServiceModalOpen,

        updateServiceTitle, setUpdateServiceTitle,
        updateServiceOldPrice, setUpdateServiceOldPrice,
        updateServiceNewPrice, setUpdateServiceNewPrice,
        updateServiceDiscount, setUpdateServiceDiscount,
        updateServiceDescription, setUpdateServiceDescription,
        updateServiceFeatures, setUpdateServiceFeatures,

        serviceUpdateFun,

        contactEnquiryData

    };

    return(
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
    
};

export default MyContextProvider;
