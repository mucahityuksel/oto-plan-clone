import React from 'react'
import About from '../../components/About'
import Campaigne from '../../components/Campaigne'
import Divider from '../../components/Divider'
import ExplainContainer from '../../components/ExplainContainer'
import FilterBar from '../../components/FilterBar'
import Footer from '../../components/Footer'
import Headers from '../../components/Header'
import InformationComponent from '../../components/InformationComponent'

function Home() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F7F6" }}>

            <Headers />
            <InformationComponent />
            <About />
            <Campaigne />
            <ExplainContainer />
            <Divider />
            <Footer />
            <FilterBar />

        </div>
    )
}

export default Home
