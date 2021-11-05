import React from 'react'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import Navbar from '../components/Common/Navbar'
import PageContent from '../components/Common/Pagecontent'

const Home = () => {
    return (
        <>
          <Navbar /> 
          <Header />
          <PageContent />
          <Footer /> 
        </>
    )
}

export default Home
