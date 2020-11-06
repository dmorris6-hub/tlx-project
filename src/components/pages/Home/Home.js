import React from 'react'
import '../../../App.css'
import Footer from '../../Footer'
import HeroSection from './HeroSection'
import HomeAbout from './HomeAbout'
import HomeContact from './HomeContact'
import HomePics from './HomePics'


function Home() {
    return (
        <>
            <HeroSection />
            <HomePics />
            <HomeAbout />
            <HomeContact />
            <Footer />
        </>
    )
}

export default Home
