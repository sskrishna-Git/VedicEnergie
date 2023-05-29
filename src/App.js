import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Get_A_Quote from './pages/Get_A_Quote';
import Blog from './pages/Blog';
import InputField from './pages/InputFeild';
import AppPage from './pages/AppPage';
import Section from './pages/Section';



function App() {
  return (
    <div>
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<AppPage />} />
        <Route path='/' element={<Section />} />
        <Route path="about" element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='services' element={<Services />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='getaquote' element={<Get_A_Quote />} />
        <Route path='/' element={<InputField />} />
       </Routes>
       </BrowserRouter>
    </div>
    </div>
  )
}

export default App