import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiFillCar } from "react-icons/ai"
import { FaGasPump, FaBurn, FaCloudDownloadAlt } from "react-icons/fa"
import { GiGearStick } from "react-icons/gi"
import { GarageCartItem } from './type';

function GarageFilter({data} : {data?:GarageCartItem}) {
    const {t,i18n} = useTranslation();
    
    return (
        <div className='garage-filter-component'>
            <div className='garage-filter-items'>
                <FaGasPump size="1.5em" color='#666'/>
                <div>
                    <label className='g-f-title'>{t("Fuel Type")}</label>
                    <label className='g-f-subtitle'>{t(`${data?.Car?.CarSpecs.FuelType}`)}</label>
                </div>
            </div>
            <div className='garage-filter-items'>
                <GiGearStick size="1.5em" color='#666'/>
                <div>
                    <label className='g-f-title'>{t("Gear Type")}</label>
                    <label className='g-f-subtitle'>{t(`${data?.Car?.CarSpecs.GearType}`)}</label>
                </div>
            </div>
            <div className='garage-filter-items'>
                <AiFillCar size="1.5em" color='#666'/>
                <div>
                    <label className='g-f-title'>{t("Body Type")}</label>
                    <label className='g-f-subtitle'>{t(`${data?.Car?.CarSpecs.BodyType}`)}</label>
                </div>
            </div>
            <div className='garage-filter-items'>
                <FaBurn size="1.5em" color='#666'/>
                <div>
                    <label className='g-f-title'>{t("Consumption")}</label>
                    <label className='g-f-subtitle'>{t(`${data?.Car?.CarSpecs.ConsumptionMin}`)}-{t(`${data?.Car?.CarSpecs.ConsumptionMax}`)} km</label>
                </div>
            </div>
            <div className='garage-filter-items'>
                <FaCloudDownloadAlt size="1.5em" color='#666'/>
                <div>
                    <label className='g-f-title'>{t("Carbon Dioxide")}</label>
                    <label className='g-f-subtitle'>{t(`${data?.Car?.CarSpecs.CarbonDioxideMin}`)}-{t(`${data?.Car?.CarSpecs.CarbonDioxideMax}`)} g/km</label>
                </div>
            </div>
        </div>
    )
}

export default GarageFilter
