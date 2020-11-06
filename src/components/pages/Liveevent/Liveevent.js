import React from 'react'
import '../../../App.css'
import LiveeventHero from './LiveeventHero'
import Footer from '../../Footer'
import LiveeventStream from './LiveeventStream'
import LiveeventDonate from './LiveeventDonate'

function Liveevent() {
    return (
        <>
            <LiveeventHero />
            <LiveeventStream />
            <LiveeventDonate />
            <Footer />
        </>
    )
}

export default Liveevent
