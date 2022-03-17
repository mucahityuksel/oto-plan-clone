import React from 'react';
import { Header, Content, Button } from 'rsuite';
import { GarageCartItem } from '../MyGarage/type';
import {FaTrash} from "react-icons/fa"
import "./style.scss"
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import garageCart from '../../redux/garage';
function HeaderGarage({data} : {data : GarageCartItem[]}) {
    const {t,i18n} = useTranslation();
    const dispatch = useDispatch();
    const url = "https://otpapidev.komut.team:1471/";
    const history = useHistory()

    const remove = (item:any) => {
        dispatch(garageCart.actions.removeToGarage(item))
    }
    return <div>
        <Header className="garage-modal-header-title">{t("My Garage")}</Header>
        <Content className="content">
            {
                data.map((item) => {
                    return <div className='header-garage-modal'>
                        <div className='header-garage-left'>
                            <div className='header-garage-left-title'>
                                <label className='header-garage-left-title-item'>{item.Car?.CarBrand} {item.Car?.CarModel}</label>
                                <label className='header-garage-left-title-item1'>{item.Car?.CarVersion}</label>
                            </div>
                            <div className='header-garage-left-title'>
                                <label className='header-garage-left-title-item1'>{t("Monthly Rental Price")}</label>
                                <label className='header-garage-left-title-item1'>₺ {item.Price?.PricePerMonth ? item.Price?.PricePerMonth : 0} KDV</label>
                            </div>
                        </div>
                        <div className='header-garage-left'>
                            <img src={url + item.Car?.CarImages.FrontImage} style={{width:"127px",height:"100px"}}></img>
                        </div>
                        <div className='header-garage-modal'><FaTrash color='#7a7a7a' onClick={()=>{
                            remove(item)
                        }}/></div>
                    </div>
                })
                
            }
        </Content>
        <div className='header-garage-modal-footerr'><button className='garage-route-button' onClick={() => history.push("/garage")}>{t("My Garage")}</button></div>
    </div>
}

export default HeaderGarage;
