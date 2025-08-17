import React from 'react'
import { useContext } from 'react'
import { myContext } from '../Context/MyContextProvider'
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const ContactEnquiryList = () => {

    const { contactEnquiryData } = useContext(myContext)

    return (
        <>
            <div className="p-3">
                <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Form Enquiry</h2>
                        {/* Table */}
                        <div className="overflow-x-auto shadow-lg rounded-2xl">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-left">
                                        <th className="p-4 font-semibold">Name</th>
                                        <th className="p-4 font-semibold">Number</th>
                                        <th className="p-4 font-semibold">Message</th>
                                        <th className="p-4 font-semibold">Interest</th>
                                        <th className="p-4 font-semibold">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {contactEnquiryData.map((value, index) => (
                                        <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                                            <td className="p-4 font-medium text-gray-800">{value.contactEnquiryName}</td>
                                            <td className="p-4 text-gray-800">{value.contactEnquiryNumber}</td>
                                            <td className="p-4 font-bold text-green-600">{value.contactEnquiryMessage}</td>
                                            <td className="p-4">
                                                <ul className="space-y-1">
                                                    {value.contactEnquiryInterests.map((value, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-gray-800">
                                                        <FaCheckCircle className="text-green-500" />
                                                        {value}
                                                    </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="p-3 text-center">
                                                <button className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md">
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                    </div>
        </>
    )
}

export default ContactEnquiryList

