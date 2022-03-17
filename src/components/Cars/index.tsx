import React, { useState, useEffect } from 'react'
import logo from "../../images/logo.png"
import { AiFillCar, AiOutlineRight } from "react-icons/ai"
import { FaGasPump, FaBurn, FaCloudDownloadAlt } from "react-icons/fa"
import { GiGearStick } from "react-icons/gi"
import "./style.scss"
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Car } from './car'

import { getCarss } from '../../redux/cars'
import { useTranslation } from 'react-i18next'

function Cars() {
    const {t,i18n} = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch()
    const [carss, setCarss] = useState<Car[]>([])
    const url = "";
    useEffect(() => {
        dispatch(getCarss({
            payload: {
                onSuccess: (message, payload) => {
                    setCarss(payload)
                },
                onError: () => { }
            },
            url: ""
        }))
        
    }, [])


    const route = async (item: any) => {
        history.push(`/car-details/${item}`)
        
    }
    return (
        <div className='campaign-cards' >

            {carss?.map((item) => {
                return <div style={{ width: "294px", height: "435px", overflow: "hidden", backgroundColor: "white", display: "inline-block", textAlign: "start", margin: "0", padding: "0" }} onClick={() => route(item.Id)} >
                    <div style={{ padding: "0 !important", margin: "0" }}>
                        <div style={{ display: "flex", flexDirection: "column", height: "425px", justifyContent: "space-between" }}>
                            <div style={{display:"flex",width:"294px"}}><img src={url+item.MainImage} style={{width:"294px",  height: "180px"}}></img></div>
                            <div style={{ display: "block" }}>
                                <div style={{ display: "flex", flexDirection: "column", padding: "10px",margin:"13px auto", color: "#585858" }}>
                                    <div style={{ fontWeight: "700" }}>{item.CarBrand} {item.CarModel}</div>
                                    <div style={{ fontSize: "13px" }}>{item.CarVersion} {item.CarPack}</div>
                                </div>
                                <div style={{ border: "0.5px solid #BFBFBF" }}></div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin:"0px ", justifyContent: "space-between", padding: "10px" }}>
                                    <div style={{ color: "#999999", display: "flex", alignItems: "center" }}>
                                        <FaGasPump size="20px" color='#666666' style={{ marginRight: "8px" }} />
                                        <label style={{ fontSize: "13px" }}>{t(`${item.FuelType}`)}</label>
                                    </div>
                                    <div style={{ color: "#999999", display: "flex", alignItems: "center" }}>
                                        <GiGearStick size="20px" color='#666666' style={{ marginRight: "8px" }} />
                                        <label style={{ fontSize: "13px" }}>{t(`${item.GearType}`)}</label>
                                    </div>
                                    <div style={{ color: "#999999", display: "flex", alignItems: "center" }}>
                                        <AiFillCar size="20px" color='#666666' style={{ marginRight: "8px" }} />
                                        <label style={{ fontSize: "13px" }}>{item.BodyType === "Station Wagon" ? "S.Wagon" : item.BodyType}</label>
                                    </div>
                                    <div style={{ color: "#999999", display: "flex", alignItems: "center" }}>
                                        <FaBurn size="20px" color='#666666' style={{ marginRight: "8px" }} />
                                        <label style={{ fontSize: "13px" }}>{item.Consumption} km</label>
                                    </div>
                                    <div style={{ color: "#999999", display: "flex", alignItems: "center" }}>
                                        <FaCloudDownloadAlt size="20px" color='#666666' style={{ marginRight: "8px" }} />
                                        <label style={{ fontSize: "13px" }}>{item.Carbon} g/km</label>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#DFDDDA" }}>
                                    <div style={{ display: "flex", flexDirection: "column", padding: "10px", color: "#707070" }} >
                                        <div>{t("Monthly Rental Price")}</div>
                                        <div style={{ fontWeight: "800", fontSize: "37px" }}>{t("Take Offer")}</div>
                                    </div>
                                    <div style={{ padding: "10px" }}>
                                        <AiOutlineRight size="15px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>

    )
}

export default Cars
