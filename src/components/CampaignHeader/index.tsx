import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowRight } from "react-icons/ai"
import "./style.scss"
function CampaignHeader() {
    const { t, i18n } = useTranslation();
    return (
        <div className='campaign-header' >
            <div className='campaign-title' >{t("Campaigns")}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineArrowRight color='#E02825' size="20px" />
                <a className="all-campaign" href='#'>{t("ShowAllCamp")}</a>
            </div>
        </div>
    )
}

export default CampaignHeader
