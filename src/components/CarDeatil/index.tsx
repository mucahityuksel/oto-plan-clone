import React, { useEffect, useState } from 'react'
import Campaigne from '../Campaigne'
import Cars from '../Cars'
import { Breadcrumb } from "rsuite"
import DetailFilter from '../DetailFilter'
import { AiOutlineArrowRight, AiFillCar } from "react-icons/ai"
import { RiArrowUpDownFill } from "react-icons/ri"
import SelectPage from '../SelectPage'
import "./style.scss"
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getFilterCarList } from '../../redux/cars'
import { Car } from '../Cars/car'
function CarDetail() {
    const dispatch = useDispatch();
    const [cars, setCars] = useState<Car[]>([]);
    //const localize = useSelector(getLocalized);
    const location = useLocation<any>();
    const [pageNumber, setPageNumber] = useState(1);
    const [displayLength, setDisplayLength] = useState(6);
    const [loader, setLoader] = useState<"visible" | "hidden">("hidden");
    const { t, i18n } = useTranslation();
    function getData() {
        return cars.filter((v, i) => {
            const start = displayLength * (pageNumber - 1);
            console.log(start, "start");
            const end = start + displayLength;
            console.log(end, "end");
            return i >= start && i < end;
        });
    }
    useEffect(() => {
        setLoader("visible");
        dispatch(
            getFilterCarList({
                payload: {
                    onSuccess: (message, payload) => {
                        setCars(payload);
                        setLoader("hidden");
                    },
                    onError: (message) => { },
                },
                url: "https://otpapidev.komut.team:1471/api/car/filter" + location.search,
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='car-detail-component'>
            <div className='car-detail-container'>
                <div className='detail-header'>
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">{t("Home")}</Breadcrumb.Item>
                            <Breadcrumb.Item href="/cars" active>{t("Filter Result")}</Breadcrumb.Item>

                        </Breadcrumb>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                        <AiOutlineArrowRight color='#E02825' size="20px" />
                        <a className="all-campaign" href='#'>{t("Show All Cars")}</a>
                    </div>
                </div>
                <div className='detail-body-titles'>{t("Avaible Car")}</div>
                <div className='detail-filter-bar'>
                    <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>3 x <AiFillCar color='#666' style={{ margin: "10px 5px", fontSize: "16px" }} /> {t("Liste")}</div>
                    <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                        <div className='salery-filter'>{t("Fiyat Sırala")}</div>
                        <RiArrowUpDownFill color='#E02825' size="1.5em" />
                    </div>
                </div>
                <div className='detail-body'>
                    <div className='detail-left-side'>
                        <DetailFilter setCars={setCars} />
                    </div>
                    <div className='detail-right-side'>
                        <div className='cars-filter-bar'><Cars /></div>
                        <div><SelectPage /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetail
