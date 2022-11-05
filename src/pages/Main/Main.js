import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
