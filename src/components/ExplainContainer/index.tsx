import React from 'react'
import { useTranslation } from 'react-i18next';
import image from "../../assets/car_hero.jpg"
import "./style.scss"
function ExplainContainer() {
    const {t,i18n} = useTranslation();
    const url = "https://otpapidev.komut.team:1471/";
    return (
        <div className='explain-container'>
            <div style={{flex:"15%",marginRight:"35px"}}><img style={{width:"100%", objectFit:"contain"}} src={image}></img> </div>
            <div style={{flex:"80%",textAlign:"start"}}>
                <div className="explain-title" style={{fontWeight:"800",color:"#4d4d4d",fontSize:"32px"}}>{t("Smart Plans")}</div>
                <div className="explain-title" style={{fontWeight:"500", color:"#707070",fontSize:"24px"}}>{t("Smart Plans1")}</div>
                <p className="explain-title" style={{fontWeight:"400", color:"#707070",fontSize:"16px"}}>{t("Smart Plans2")}</p>
            </div>
        </div>
    )
}

export default ExplainContainer
