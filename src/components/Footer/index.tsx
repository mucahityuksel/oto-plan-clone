import React from 'react'
import {RiUserVoiceFill} from "react-icons/ri"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter,BsYoutube,BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import image from "../../images/footer.png"
import Divider from '../Divider'
import "./style.scss"
import { useTranslation } from 'react-i18next'

function Footer() {
    const url1 = "data:image/png;base64,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"
    const url2 = 'data:image/png;base64,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'
    const {t,i18n} = useTranslation();
    return (
        <div className='footer-component'>
            <div className='footer-bar'>
               
                <div className='footer-header'>
                    <div className='footer-image'>
                        <img src={image} style={{objectFit:"contain",width:"80px",height:"44px",margin:"0px auto"}}></img>
                    </div>
                    <div className='footer-header-text' >{t("Email1")} <div style={{fontWeight:"700",padding:"0px 5px"}}>info@otoplan.com.tr</div> {t("Email2")}</div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-left' >
                        <ul className='footer-left-list' >
                            <li style={{display:"flex",flexDirection:"column"}}>
                                <a className='footer-links-item1' style={{fontWeight:"800",fontSize:"20px",color:"#4D4D4D"}}>{t("Institutional")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("About Us")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Services")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("After Selling")}</a>
                            </li>
                            <li style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap"}}>
                                <a className='footer-links-item1' style={{fontWeight:"800",fontSize:"20px",color:"#4D4D4D"}}>{t("Database")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Cookies")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Vehicle Delivery")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Data Owner")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Protection")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>SSS</a>
                            </li>
                            <li style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap"}}>
                                <a className='footer-links-item1' style={{fontWeight:"800",fontSize:"20px",color:"#4D4D4D"}}>{t("Contact")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Contact")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Satisfaction")}</a>
                                <a className='footer-links-item' style={{fontSize:"14px",color:"4d4d4d",lineHeight:"25px"}}>{t("Suggestion ")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-right' >
                        <div>
                            <div style={{justifyContent:"center",fontWeight:"800",fontSize:"20px",color:"4d4d4d",whiteSpace:"nowrap"}}>OTO PLAN <RiUserVoiceFill/></div>
                        </div>
                        <div style={{color:"4d4d4d",fontSize:"20px",whiteSpace:"nowrap"}}>{t("Customer Support")}</div>
                        <div style={{fontWeight:"900",fontSize:"36px",color:"#E02825"}}>444 5 oto</div>
                        <div style={{gap:"20px"}}>
                            <FaFacebookF color="white" size="2em"/>
                            <BsTwitter color="white"  size="2em"/>
                            <AiFillInstagram color="white"  size="2em"/>
                            <BsLinkedin color="white"  size="2em"/>
                            <BsYoutube color="white"  size="2em"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
