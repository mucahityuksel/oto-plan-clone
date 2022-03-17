import React, { useRef } from 'react'
import { AiFillCar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa"
import "./style.scss"
import GarageFilter from './GarageFilter';
import { useDispatch, useSelector } from 'react-redux';
import reduxStore from "../../redux/index"
import garageCart, { garageCartSelector } from '../../redux/garage';
import { GarageCartItem } from './type';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { generateUUID } from '../../helpers/guid';


function MyGarage({
    data
}: {
    data?: GarageCartItem,
}) {
    const [open, setOpen] = React.useState(false);
    //const { store } = reduxStore();
    const handleOpen = () => setOpen(true)
    const dispatch = useDispatch();
    const handleClose = () => setOpen(false);
    //const garageCarts = useSelector(garageCartSelector);

    const url = "https://otpapidev.komut.team:1471/";
    const { t, i18n } = useTranslation();
    const dataRef = useRef<GarageCartItem>({
        ExtraServices: data?.ExtraServices ? data.ExtraServices : [],
        Count: data?.Count ? data.Count : 0,
        Car: data?.Car,
        Id: data?.Id,
        Price: data?.Price,
        Color: data?.Color,
        Insurance: data?.Insurance,
    })
    //const [newData, setNewData] = useState<GarageCartItem[]>(garage)
    console.log("dataRef", dataRef.current);

    useEffect(()=> {
        console.log(data)
    },[])

    return (
        <div className='garage-left-side'>
            <div className='garage-left-car' id="garage-left">
                <div className='garage-left-car-items'>
                    <div className='garage-car-image'>
                        <img src={url + data?.Car?.CarImages.FrontImage}></img>
                    </div>
                    <div className='garage-car-info'>
                        <div className='garage-car-header'>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <label className='garage-car-header-title'>{data?.Car?.CarBrand} {data?.Car?.CarModel}</label>
                                <label>{data?.Car?.CarVersion}</label>
                            </div>
                            <div><FaTrash color="#666" onClick={() => {
                                dispatch(garageCart.actions.removeToGarage(data))
                                setTimeout(() => { 
                                    window.location.reload();
                                }, 1000);
                            }} /></div>
                        </div>
                        <div className='garage-car-body'>
                            <div style={{display:"flex",flexDirection:"column"}}><label className='car-body-title'>{t("KM Limit")}</label><label>{data?.Price?.KMLimitPerYear ? data?.Price?.KMLimitPerYear : 1000}</label></div>
                            <div style={{display:"flex",flexDirection:"column"}}><label className='car-body-title'>{t("Period")}</label><label>{data?.Price?.PeriodCount ? data?.Price?.PeriodCount : 2000}</label></div>
                            <div style={{display:"flex",flexDirection:"column"}}><label className='car-body-title'>{t("Insurance")}</label><label>{data?.Car?.HasCampaign === true ? "evet" : "hayır"}</label></div>
                        </div>
                        <div className='garage-car-footer'>
                            <div>
                                <div>{t("Monthly Rental Price")}<label>₺{data?.Price?.PricePerMonth}</label></div>
                                <div>1 x <AiFillCar color='#666' size="2em"></AiFillCar></div>
                            </div>
                            <div>
                                <button className='garage-button'>{t("Edit")}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div><GarageFilter data={data}/></div>
                <div className='garage-bottom-side'>
                    <label className='garage-bottom-title'>{t("Extra Services")}</label>
                    <label className='garage-bottom-subtitle'>{t("Services Desc")}</label>
                </div>
            </div>
        </div>



    )
}

export default MyGarage
