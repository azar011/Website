import React, { useState, createContext } from 'react'

export const myContext = createContext()

const MyContextProvider = ({children}) => {

    const [formData, setFormData] = useState({
        title: "",
        oldPrice: "",
        price: "",
        discount: "",
        description: "",
        features: [""],
    });

    // handle input changes
    const handleChange = (e, index) => {
        const { name, value } = e.target;

        if (name === "features") {
            const updatedFeatures = [...formData.features];
            updatedFeatures[index] = value;
            setFormData({ ...formData, features: updatedFeatures });
            } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // add new feature input
    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ""] });
    };

    // remove feature
    const removeFeature = (index) => {
        const updatedFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: updatedFeatures });
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const newService = {
        title: formData.title,
        oldPrice: formData.oldPrice,
        price: formData.price,
        discount: formData.discount,
        description: formData.description,
        features: formData.features.filter((f) => f.trim() !== ""), // remove empty ones
        };

        console.log("Service JSON:", newService);
    };

    const myContextValue = {
        handleSubmit,
        formData,
        handleChange,
        removeFeature,
        addFeature
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider