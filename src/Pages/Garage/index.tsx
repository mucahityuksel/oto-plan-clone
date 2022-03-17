import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Divider from '../../components/Divider'
import Footer from '../../components/Footer'
import Headers from '../../components/Header'
import MyGarage from '../../components/MyGarage'
import GarageHeader from '../../components/MyGarage/garageHeader'
import { GarageCartItem } from '../../components/MyGarage/type'
import garageCart, { garageCartSelector } from '../../redux/garage'
import { RootState } from '../../redux/reducers'
import SaleryBox from './saleryBox'
import saleryBox from './saleryBox'
import "./style.scss"

function Garage() {
    const garageCarts = useSelector(garageCartSelector);
    const garageCartRef = useRef(garageCarts);
    const { t, i18n } = useTranslation();


    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F7F6" }}>
            <Headers />
            <GarageHeader />
            <div className='my-garage-component'>
                <div className='garage-body'>
                    <div className='garage-body-left'>
                        <div className='garage-info'>
                            <div>{t("Garage Title")}</div>
                            <button>{t("Details")}</button>
                        </div>
                        {garageCarts.map((data) => (
                            <MyGarage data={data} />
                        ))}{" "}
                    </div>
                    <SaleryBox data={garageCarts}></SaleryBox>
                </div>
            </div>
            <Divider />
            <Footer />
        </div>
    )
}

export default Garage
