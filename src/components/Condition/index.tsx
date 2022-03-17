import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Nav } from 'rsuite'
import text from "../../detail-text.json"
import "./style.scss"

function Condition() {

    const [load, setLoad] = useState(true);
    const {t,i18n} = useTranslation();
    
    return (
        <div className='condition-component'>
            <div className='condition-header'>
                <div className='condition-header-nav'>
                    <Nav >
                        <Nav.Item className="c-nav-title" active={true} onClick={() => setLoad(true)}>{t("rental conditions")}</Nav.Item>
                        <Nav.Item className="c-nav-title" onClick={() => setLoad(false)}>{t("Ekstra Services")}</Nav.Item>
                    </Nav>
                </div>
            </div>
            <div className={load === true ? 'condition-body' : "condition-new-body"}>
                <div className='c-body-title'>{t("rental conditions")}</div>
                <p>{text.text1.first}</p>
                <p>{text.text1.second}</p>
            </div>
            <div className={load === false ? 'condition-body' : "condition-new-body"}>
                <div className='c-body-plus'>
                    <div className='condition-card'>
                        <p className='c-body-title'>{t("Insurance")}</p>
                        <div>
                            <p className='c-body-subtitle'>{t("Insurance Description")}</p>
                        </div>
                    </div>
                    <div className='condition-card'>
                        <p className='c-body-title'>tESTRT</p>
                        <div>
                            <p className='c-body-subtitle'>TR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Condition
