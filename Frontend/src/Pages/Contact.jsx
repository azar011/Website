import React from 'react'
import Header from '../Components/CommonComponents/Header'
import Footer from '../Components/CommonComponents/Footer'
import ContactForm from '../Components/ContactPageComponents/ContactForm'
import ContactHeroSection from '../Components/ContactPageComponents/ContactHeroSection'

const Contact = () => {
  return (
    <>
      <Header />
      <ContactHeroSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact