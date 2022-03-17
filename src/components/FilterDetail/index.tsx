import { useTranslation } from "react-i18next"
import { AiFillCar } from "react-icons/ai"
import { FaGasPump, FaBurn, FaCloudDownloadAlt } from "react-icons/fa"
import { GiGearStick } from "react-icons/gi"
import { CarDetail } from '../CarD/carDetail'
import "./style.scss"

function FilterDetail({data}:{data?:CarDetail}) {
    const {t,i18n} = useTranslation();
    return (
        <div className='filter-detail-component'>
            <div className='filter-detail-container'>
                <div className='detail-filter-items'>
                    <FaGasPump size="2em"/>
                    <div>
                        <label className='title'>{t("Fuel Type")}</label>
                        <label className='subtitle'>{t(`${data?.CarSpecs.FuelType}`)}</label>
                    </div>
                </div>
                <div className='detail-filter-items'>
                    <GiGearStick size="2em"/>
                    <div>
                        <label className='title'>{t("Gear Type")}</label>
                        <label className='subtitle'>{t(`${data?.CarSpecs.GearType}`)}</label>
                    </div>
                </div>
                <div className='detail-filter-items'>
                    <AiFillCar size="2em"/>
                    <div>
                        <label className='title'>{t("Body Type")}</label>
                        <label className='subtitle'>{data?.CarSpecs.BodyType}</label>
                    </div>
                </div>
                <div className='detail-filter-items'>
                    <FaBurn size="2em"/>
                    <div>
                        <label className='title'>{t("Consumption")}</label>
                        <label className='subtitle'>{data?.CarSpecs.ConsumptionMin} - {data?.CarSpecs.ConsumptionMax} km</label>
                    </div>
                </div>
                <div className='detail-filter-items'>
                    <FaCloudDownloadAlt size="2em"/>
                    <div>
                        <label className='title'>{t("Carbon Dioxide")}</label>
                        <label className='subtitle'>{data?.CarSpecs.CarbonDioxideMin} - {data?.CarSpecs.CarbonDioxideMax} g/km</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterDetail
