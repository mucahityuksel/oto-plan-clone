import { useTranslation } from 'react-i18next';
import "./style.scss"
function Nav() {
    const {t} = useTranslation();
   
    return (
        <div className='responsive-nav'>
            <div><a href='/garage'>{t("My Garage")}</a></div>
            <div><a>{t("Institutional")}</a></div>
            <div><a>{t("Services")}</a></div>
            <div><a>{t("After Selling")}</a></div>
            <div><a>{t("Used Car")}</a></div>
            <div><a>Language</a></div>
            <div><a>{t("Campaigns")}</a></div>
            <div><a>{t("Contact")}</a></div>
            <div><a>{t("News")}</a></div>
        </div>
    )
}

export default Nav
