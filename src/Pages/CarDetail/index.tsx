import React from 'react'
import CarDetail from '../../components/CarDeatil'
import Divider from '../../components/Divider'
import Footer from '../../components/Footer'
import Headers from '../../components/Header'

function CarDetailPage() {
    return (
        <div style={{ width:"100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F7F6" }}>
         
            <Headers />
            <CarDetail/>
            <Divider/>
            <Footer />         

            
        </div>
    )
}

export default CarDetailPage
