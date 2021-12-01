import React from 'react'
import '../Assets/css/styles.css'
import About from './components/About'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import Header from './components/Header'
import All from './components/Modal All'

import Modal_Cake from './components/Modal Cake'
import Modal_House from './components/Modal House'
import Modal_Safe from './components/Modal Safe'
import Modal_Stick from './components/Modal Stick'
import Modal_Submarine from './components/Modal Submarine'
import Modal_Tent from './components/Modal Tent'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

export default function Homepage() {
    return (
            <div>
            <Navbar />
            {/* Masthead*/}
            <Header />
            {/* Portfolio Section*/}
            <Portfolio />
            {/* About Section*/}
            <About />
            {/* Contact Section*/}
            <Contact />
            {/* Footer*/}
            <Footer />
            {/* Copyright Section*/}
            <Copyright />
            {/* Portfolio Modals*/}
            <All />
            </div>
    )
}
