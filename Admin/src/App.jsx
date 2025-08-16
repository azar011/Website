import React from 'react'
import { ToastContainer } from 'react-toastify'
import AdminSideBar from './Components/AdminSideBar'
import AdminNavBar from './Components/AdminNavBar'
import AddCourse from './Pages/AddCourse'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddService from './Pages/AddService'
import MyContextProvider from './Context/MyContextProvider'

const App = () => {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MyContextProvider>
          <div className="flex h-screen">
            <AdminSideBar />
            <div className="flex-1 h-screen overflow-y-scroll">
              <AdminNavBar />
              <div className="p-5">
                <Routes>
                  <Route path='/addcourse' element={<AddCourse />} />
                </Routes>
                <Routes>
                  <Route path='/addservice' element={<AddService />} />
                </Routes>
              </div>
            </div>
          </div>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App