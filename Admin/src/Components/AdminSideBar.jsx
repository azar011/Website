import React from "react";
import { NavLink, Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
      <div className="text-white bg-blue-700 p-3">
        <div className="flex items-center justify-center gap-3 text-2xl py-6">
            <p className="hidden sm:block font-medium">ViteCode Tech</p>
        </div>

        <div className="ml-3">
            <div to="/add-product">
                <i className="fa-solid fa-file-circle-plus"></i>
                <NavLink to="/addservice" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                    ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`}>
                    <p className='font-semibold hidden sm:block'>Add Services</p>
                </NavLink>
                <NavLink to="/addcourse" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                    ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`}>
                    <p className='font-semibold hidden sm:block'>Add Courses</p>
                </NavLink>
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;