import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen, FaTools, FaListUl, FaClipboardList } from "react-icons/fa";

const AdminSideBar = () => {
  return (
    <>
      <div className="text-white bg-blue-700 w-60 pe-4 min-h-screen">
        <div className="flex items-center justify-center text-2xl py-6">
          <p className="hidden sm:block font-medium">ViteCode Tech</p>
        </div>

        <div className="ml-3">
          <div>
            <h1 className="font-bold underline underline-offset-8">Add</h1>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
                ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
              }
            >
              <FaBookOpen size={20} />
              <p className="font-semibold hidden sm:block">Course</p>
            </NavLink>

            <NavLink
              to="/addservice"
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
                ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
              }
            >
              <FaTools size={20} />
              <p className="font-semibold hidden sm:block">Service</p>
            </NavLink>

            <h1 className="font-bold underline underline-offset-8">List</h1>

            <NavLink
              to="/courselist"
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
                ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
              }
            >
              <FaListUl size={20} />
              <p className="font-semibold hidden sm:block">Course List</p>
            </NavLink>

            <NavLink
              to="/servicelist"
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
                ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
              }
            >
              <FaClipboardList size={20} />
              <p className="font-semibold hidden sm:block">Service List</p>
            </NavLink>

            <NavLink
              to="/contactenquirylist"
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2  
                ${isActive ? "bg-blue-600 text-white shadow-2xl" : "hover:bg-blue-600 hover:shadow-lg"}`
              }
            >
              <FaClipboardList size={20} />
              <p className="font-semibold hidden sm:block">Contact Enquiry</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
