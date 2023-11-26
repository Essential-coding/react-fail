import React from 'react'

import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import Sponsors from '../components/Sponsors'
import FeaturesSection from '../components/FeaturesSection'
import AboutCompany from '../components/AboutCompany'


const Home = () => {
  return (
    <>
 
    <Header />
    <div className='wrapper-grid'>
    <main>
    <Showcase />
    <Sponsors />
    <FeaturesSection />
    <AboutCompany />
    </main>

    <Footer/>
 
    </div>
    </>
  )
}

export default Home