import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/courses' element={<Courses />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App