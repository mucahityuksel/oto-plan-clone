import React, { useEffect, useState } from 'react';
import { GarageCartItem } from '../../components/MyGarage/type';
import { Breadcrumb, Modal, Button } from "rsuite";
import "./style.scss"
import text from "./text.json"
import { useTranslation } from 'react-i18next';
function SaleryBox({ data }: { data: GarageCartItem[] }) {
    const [open, setOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    let total = 0
    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false);
  
    return <div className='garage-right-side'>
        <div>
            <div className='product-header'>
                <div className='product-title'>
                    <div >{t("Order Summary")}</div>
                    <table>
                        <tr className='first-table'>
                            <th className='table-header1'>{t("Description")}</th>
                            <th className='table-header2'>{t("Price")}</th>
                            <th className='table-header3'>{t("Count")}</th>
                        </tr>
                    </table>
                    {
                        data && data.map((garageCartItem) => {
                            return <table>
                                <tr className='second-table'>
                                    <th className='table-body1'>
                                        <label>{garageCartItem?.Car?.CarBrand} {garageCartItem?.Car?.CarModel}</label>
                                        <label>{garageCartItem.Car?.CarVersion}</label>
                                    </th>
                                    <th className='table-body2'>{garageCartItem?.Price?.PeriodCount}</th>
                                    <th className='table-body3'>1</th>
                                </tr>
                            </table>
                        })
                    }
                    <table>
                        <tr className='third-table'>
                            <th className='table-s-header1'>{t("Extra Services")}</th>
                            <th className='table-s-header3'>{t("Count")}</th>
                        </tr>
                    </table>
                    <table>
                        <tr className='fourth-table'>
                            <th className='table-f-body1'>
                                {t("Comfort Package")}
                            </th>
                            <th className='table-f-body3'>{data.length}</th>
                        </tr>
                    </table>
                    <div className='product-footer'>
                        
                        <div className='salery'>
                            <label className='salery'>{new Intl.NumberFormat("tr-TR", {
                                style: "currency",
                                currency: "TRY",
                                maximumSignificantDigits: 5,
                            }).format(
                                parseInt(
                                    `${data
                                        ?.flatMap((v) => v.Price?.PricePerMonth)
                                        //@ts-ignore
                                        ?.reduce((price, a) => price + a, 0)}`
                                )
                            )}</label>

                            <div className='salery-info'>{t("KDV")}</div>
                        </div>
                    </div>
                    <div className='product-button-bar'>
                        <button className='product-button' onClick={handleOpen}>{t("Teklif Oluştur")}</button>
                    </div>
                    <Modal open={open} onClose={handleClose} className='modal-container'>
                        <Modal.Header className='modal-header'>
                            <Modal.Title style={{ padding: "15px 45px", margin: "0px auto" }}>Teklif</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-body'>
                            <div style={{ width: "100%" }}>
                                <div style={{ padding: "15px 120px" }}>{text.text1}</div>
                                <div style={{ padding: "15px 120px" }}>{text.text2}</div>
                                <div style={{ padding: "15px 120px" }}>{text.text3}</div>
                                <div style={{ padding: "15px 120px" }}>{text.text4}</div>
                                <div style={{ padding: "15px 120px" }}>{text.text5}</div>
                                <div style={{ padding: "15px 120px" }}>{text.text6}</div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <Button onClick={handleClose} className="modal-footer-button">
                                Teklfi Onayla
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
}

export default SaleryBox;
