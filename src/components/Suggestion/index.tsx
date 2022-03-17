
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CarDetail } from "../CarD/carDetail";
import Cars from "../Cars";
import "./style.scss"

function Suggestion({data}:{data?:CarDetail}) {
    const {t,i18n} = useTranslation();

    return (
        <div className="suggestion-component">
            
                <div className='suggestion-header' >
                    <div className='suggestion-title'>{t("Similar Cars")}</div>
                </div>
                <Cars></Cars>
            
        </div>
    )
}

export default Suggestion
