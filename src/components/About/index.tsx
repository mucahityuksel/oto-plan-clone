
import { useTranslation } from "react-i18next";
import "./style.scss"

function About() {
    const {t,i18n} = useTranslation();

    return (

        <div className='about-container'>
            <div className='about-text'>{t("About")}</div>
            <div style={{ width: "14%" }}>
                <button className='about-button'>{t("About Us")}</button>
            </div>
        </div>

    )
}

export default About
