import React, { useState, useEffect } from 'react'
import image from "../../images/indir.png"
import { GiHomeGarage, GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "rsuite/dist/rsuite.min.css"
import "./style.scss"
import Nav from './Nav'
import { useHistory } from 'react-router-dom'
import {useSelector } from 'react-redux'
import { Badge, Container, Dropdown} from 'rsuite'
import { garageCartSelector } from '../../redux/garage'
import HeaderGarage from './HeaderGarage'
import {useTranslation, withTranslation} from "react-i18next"



function Headers() {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const garageCart = useSelector(garageCartSelector)
    const {t,i18n} = useTranslation();
    const [title,setTitle] = useState("tr-TR");
    const handleChange = (text:any) => {
        i18n.changeLanguage(text)
        setTitle(text)
    }
    const handleClick = () => {
        setOpen(!open);
    }
    useEffect(()=>{
        console.log(garageCart)
    },[])
   
    return (
        <div className='header' style={{ position: "fixed", top: 0, borderBottom: "1px solid #ddd", height: "57px", zIndex: "20", backgroundColor: "white" }}>
            <div className='header-bar' style={{ maxWidth: "1173px",width:"98%", position: "relative", justifyContent: "space-between" }}>
                <div className='header-left'>
                    <img src={image} style={{ position: "relative", objectFit: "contain",width:"67px" }}></img>
                </div>

                <div className='header-right' >
                    <div style={{ display: "flex", textAlign: "end", fontSize: "12px", fontWeight: "500", alignItems: "end", marginTop: "8px" }}>
                        <a className='top-links-item-k' style={{ color: "#E02825", cursor: "pointer",marginTop:"15px", marginLeft: "10px", lineHeight: "10px" }}>{t("Campaigns")}</a>
                        <a className='top-links-item' >{t("Contact Us")}</a>
                        <a className='top-links-item' >{t("News")}</a>
                    </div>
                    <div style={{ display: "flex", fontSize: "12px", fontWeight: "500", alignItems: "center", justifyContent: "center" }}>
                        <a className='bottom-links-itemm' >{t("Institutional")}</a>
                        <a className='bottom-links-itemm' >{t("Services")}</a>
                        <a className='bottom-links-itemm' >{t("After Selling")}</a>
                        <a className='bottom-links-itemm' >{t("Used Car")}</a>
                        <a >
                            <Dropdown noCaret title={title} className='language-bar'>
                                <Dropdown.Item onClick={()=>{
                                    handleChange("en")
                                    setTitle("en-EN")
                            }}>English</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{
                                    handleChange("tr")
                                    setTitle("tr-TR")
                                    }}>Türkçe</Dropdown.Item>
                            </Dropdown>
                        </a>

                    </div>
                </div>
            </div>
            <div className='header-icon'  style={{ marginLeft:"25px",cursor: "pointer", position: "relative", alignItems: "center" }}>
                <Dropdown
                    className="navbar-dropdown"
                    trigger={["click", "hover"]}
                    placement='bottomEnd'
                    icon={
                        <Badge color="red" content={garageCart.length}>
                            <GiHomeGarage size="2em" style={{ display: "inline-block", position: "relative", padding: "2px" }}  />
                        </Badge>
                    }
                    noCaret
                    menuStyle={{
                        width: 344,
                        height: 481,
                        borderRadius: 0,
                        border: "1px solid #f5f5f5",
                    }}
                >
                    <Container className="garage-modals">
                        <HeaderGarage data={garageCart}/>
                    </Container>

                </Dropdown>

            </div>
            <div className='hamburger-menu' style={{ alignItems: "center", cursor: "pointer" }}>{open === true ? <AiOutlineClose size="2em" onClick={handleClick} /> : <GiHamburgerMenu onClick={handleClick} size="2em" />}</div>
            {
                open === true && <div className='nav-menu' id="nav-menu">
                    <Nav />
                </div>
            }
        </div>
    )
}

export default withTranslation()(Headers)
