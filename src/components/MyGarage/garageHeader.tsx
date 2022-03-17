import React from 'react';
import { Breadcrumb } from 'rsuite';
import { AiOutlineArrowRight } from "react-icons/ai"
import "./style.scss"
import { useTranslation } from 'react-i18next';

function GarageHeader() {
    const { t, i18n } = useTranslation();
    return <div className='my-garage-component'>
        <div className='car-detail-header'>
            <div>
                <Breadcrumb >
                    <Breadcrumb.Item style={{color:"black"}} href="/">{t("Home")}</Breadcrumb.Item>
                    <Breadcrumb.Item href="/garage" active>{t("My Garage")}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='garage-c-header'>
                <AiOutlineArrowRight color='#E02825' size="20px" />
                <a className="all-cars" href='#'>{t("Show All Cars")}</a>
            </div>

        </div>
        <div className='garage-header'>{t("My Garage")}</div>
        
    </div>
}

export default GarageHeader;
