import React, { useEffect, useRef, useState } from 'react'
import { Breadcrumb, Modal } from "rsuite"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { useParams } from "react-router-dom"
import "./style.scss"
import CarModal from '../CarModal'
import { CarDetail } from './carDetail'
import { Color, ExtraService, GarageCartItem, Price } from '../MyGarage/type'
import { useDispatch } from 'react-redux'
import { getCarPriceList, getColorList, getExtraService } from '../../redux/cars'
import { useTranslation } from 'react-i18next'




function CarD({ data }: { data?: CarDetail }) {
    const [open, setOpen] = React.useState(false);
    const params: any = useParams();
    const [backdrop, setBackdrop] = React.useState('static');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const [offerVisible, setOfferVisible] = useState<boolean>(false);
    const [extraService, setExtraService] = useState<ExtraService[]>([]);
    const [colors, setColors] = useState<Color[]>([]);
    const [price, setPrices] = useState<Price[]>([]);
    const offerRef = useRef<GarageCartItem>({ ExtraServices: [], Count: 0 });
    const [param, setParam] = useState(params.id);
    const url = "https://otpapidev.komut.team:1471/";
    const { t, i18n } = useTranslation();

    return (
        <div className='car-component'>
            <div className='car-container'>
                <div className='detail-div'>
                    <div className='car-detail-header'>
                        <div className='detail-header-bar'>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/" style={{color:"#707070"}}>{t("Home")}</Breadcrumb.Item>
                                    <Breadcrumb.Item href={`/car-details/${param}`} style={{color:"#707070"}}>{t("All Cars")}</Breadcrumb.Item>
                                    <Breadcrumb.Item active style={{color:"#707070"}}>{t("Car Detail")}</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                                <AiOutlineArrowRight color='#E02825' size="20px" />
                                <a className="all-cars" href='#'>{t("Show All Cars")}</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className='detail-body-titler'><div>{t("Rent a Car")}</div></div>
                    <div className='detail-car-body-div'>
                        <div className='y'>
                            <div className='z'>
                                <div className='car-body'>
                                    <div className='left-car-items'>
                                        <img src={url + data?.CarImages.FrontImage} className='car-detail-image'></img>
                                        <div className='warning-text'>*{t("Detail Warning")}</div>
                                    </div>
                                    <div className='car-center'>
                                        <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.FrontImage}></img></div>
                                        <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.FrontRightImage}></img></div>
                                        <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.InsideImage}></img></div>
                                        <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.RearImage}></img></div>
                                        <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.SideImage}></img></div>


                                    </div>
                                    <div className='car-right'>
                                        <div className='divider'></div>
                                        <div className='car-info'>
                                            <div className='info-header'>
                                                <div className='info-title'>{data?.CarBrand} {data?.CarModel} </div>
                                                <div className='info-subtitle'>{data?.CarVersion} {data?.CarPack}</div>
                                            </div>
                                            <div className='share-icon'>
                                                <BsFillShareFill size="2em" />
                                            </div>
                                        </div>
                                        <div className='car-text'>{data?.CampaignText}</div>
                                        <div className='car-text'><p dangerouslySetInnerHTML={{
                                            __html: data?.ShortDescription ? data.ShortDescription : ""
                                        }}></p></div>
                                        <div className='car-text'>{t("Detail Text")}</div>
                                         <div className='buy-container'>
                                            <div style={{ fontSize: "16px", color: "#707070", display: "flex", justifyContent: "end" }}>{t("Monthly Rental Price")}</div>
                                            <div style={{ color: "#707070", display: "flex", justifyContent: "end" }}>
                                                <label style={{ fontSize: "24px", color: "#707070", fontWeight: "700" }}>{data?.StartingPrice ? data.StartingPrice : 0}₺ </label>
                                                {t("Fair Prices")}
                                            </div>
                                            <div onClick={() => {
                                                dispatch(
                                                    getExtraService({
                                                        payload: {
                                                            onSuccess: (message, payload) => setExtraService(payload),
                                                            onError: (message) => { }
                                                        },
                                                        url: "https://otpapidev.komut.team:1471/api/definitions/extraservice"
                                                    })
                                                );
                                                dispatch(
                                                    getColorList({
                                                        payload: {
                                                            onSuccess: (message, payload) => setColors(payload),
                                                            onError: (message) => { },
                                                        },
                                                        url: "https://otpapidev.komut.team:1471/api/car/definitions/color",
                                                    })
                                                );
                                                dispatch(
                                                    getCarPriceList({
                                                        payload: {
                                                            onSuccess: (message, payload) => setPrices(payload),
                                                            onError: (message) => { },
                                                        },
                                                        url: "https://otpapidev.komut.team:1471/api/car/price/bycarid" + data?.Id,
                                                    })
                                                );
                                                offerRef.current = { ExtraServices: [], Count: 0 };
                                                offerRef.current.Car = data;
                                                setOfferVisible(true);
                                            }} style={{ width: "100%", display: "flex", justifyContent: "end" }}><button className='buy-button'>{t("Take Offer")}</button></div>
                                            <Modal backdrop="static" keyboard={false} open={offerVisible} onClose={() => { setOfferVisible(false) }} className='modal-container'>
                                                <Modal.Header className='modal-title'>
                                                    <Modal.Title className="mod-title">Teklif Oluştur</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className="modal-body">
                                                    <CarModal
                                                        data={offerRef.current}
                                                        visible={offerVisible}
                                                        handleClose={() => setOfferVisible(false)}
                                                        extraServices={extraService}
                                                        colors={colors}
                                                        price={price}
                                                        isEditing={false}
                                                    />
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className='car-body'>
                    <div className='car-left'>
                        <div className='left-car-items'>
                            <img src={url + data?.CarImages.FrontImage} className='car-detail-image'></img>
                            <div className='warning-text'>*Araçlar görsel ve donanım olarak farklılık gösterebilir</div>
                        </div>
                    </div>
                    <div className='car-center'>
                        
                            <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.FrontImage}></img></div>
                            <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.FrontRightImage}></img></div>
                            <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.InsideImage}></img></div>
                            <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.RearImage}></img></div>
                            <div style={{ width: "83px", height: "83px", backgroundColor: "white", border: "1px solid black", margin: "10px" }}><img style={{ width: "90%", height: "83px", objectFit: "contain", verticalAlign: "middle" }} src={url + data?.CarImages.SideImage}></img></div>

                        
                    </div>
                    <div className='car-right'>
                        <div className='divider'></div>
                        <div className='car-info'>
                            <div className='info-header'>
                                <div className='info-title'>{data?.CarBrand} {data?.CarModel} </div>
                                <div className='info-subtitle'>{data?.CarVersion} {data?.CarPack}</div>
                            </div>
                            <div className='share-icon'>
                                <BsFillShareFill size="2em" />
                            </div>
                        </div>
                        <div className='car-text'>{data?.CampaignText}</div>
                        <div className='car-text'>{data?.ShortDescription}</div>
                        <div className='car-text'>Hemen teslim fırsatıyla, Ford Focus Garajına eklemeye hazır!</div>
                        <div className='buy-container'>
                            <div style={{ fontSize: "16px", color: "#707070", display: "flex", justifyContent: "end" }}>Aylık Kira Tutarı</div>
                            <div style={{ color: "#707070", display: "flex", justifyContent: "end" }}>
                                <label style={{ fontSize: "24px", color: "#707070", fontWeight: "700" }}>{data?.StartingPrice} </label>
                                TL'den başlayan Fiyatlar
                            </div>
                            <div onClick={handleOpen} style={{ width: "100%", display: "flex", justifyContent: "end" }}><button className='buy-button'>TEKLİF AL</button></div>
                            <Modal backdrop="static" keyboard={false} open={open} onClose={handleClose} className='modal-container'>
                                <Modal.Header className='modal-title'>
                                    <Modal.Title>Teklif Oluştur</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modal-body">
                                    <CarModal data={data} />
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CarD
