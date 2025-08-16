import React, { useState, useContext } from "react";
import { myContext } from "../Context/MyContextProvider";

const AddService = () => {
  const { handleSubmit, formData, handleChange, removeFeature, addFeature } = useContext(myContext);

  return (
        <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl  font-bold mb-4 text-blue-700 mb-10">Add New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block font-medium">Service Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border rounded-lg p-2" required />
                </div>

                {/* Prices */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Old Price</label>
                        <input type="text" name="oldPrice" value={formData.oldPrice} onChange={handleChange} className="w-full border rounded-lg p-2" />
                    </div>
                    <div>
                        <label className="block font-medium">Price</label>
                        <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded-lg p-2" required />
                    </div>
                </div>

                {/* Discount */}
                <div>
                    <label className="block font-medium">Discount</label>
                    <input type="text" name="discount" value={formData.discount} onChange={handleChange} className="w-full border rounded-lg p-2" />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border rounded-lg p-2" rows="3" required />
                </div>

                {/* Features */}
                <div>
                    <label className="block font-medium">Features</label>
                    {formData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                        <input type="text" name="features" value={feature} onChange={(e) => handleChange(e, index)} className="w-full border rounded-lg p-2" required />
                        {formData.features.length > 1 && (
                            <button type="button" onClick={() => removeFeature(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                            ✕
                            </button>
                        )}
                        </div>
                    ))}
                    <button type="button" onClick={addFeature} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                        + Add Feature
                    </button>
                </div>

                {/* Submit */}
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold">
                Save Service
                </button>
            </form>
        </div>
    );
};

export default AddService;
