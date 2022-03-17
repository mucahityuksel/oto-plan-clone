import React from 'react'
import { useTranslation } from 'react-i18next';
import { GarageCartItem } from '../MyGarage/type'
import "./style.scss"
function Step2({
    setStep,
    data,
    handleClose,
    isEditing,
}: {
    setStep: (step: number) => void;
    data: GarageCartItem;
    handleClose: () => void;
    isEditing: boolean;
}) {
    const { t, i18n } = useTranslation();
    return (
        <div className='step1-component'>
            <div className='step2-title'><p>Ödeme Planı</p></div>
            <div>
                <table className="step3-table">
                    <tr>
                        <th>Kilometre/Yıl</th>
                        <th>Kira Süresi(ay)</th>
                        <th>Kasko</th>
                        <th>Ücret</th>
                        <th>Araç Adet</th>
                    </tr>
                    <tr>
                        <td>{data.Price?.KMLimitPerYear}</td>
                        <td>{data.Price?.PeriodCount}</td>
                        <td>{data.Insurance === true ? t("Yes") : t("No")}</td>
                        <td>{data.Price?.PricePerMonth}</td>
                        <td>{data.Count}</td>
                    </tr>
                </table>
                <table className="step3-table1">
                    <tr>
                        <th>Kilometre/Yıl</th>
                        <td>{data.Price?.KMLimitPerYear}</td>
                    </tr>
                    <tr>
                        <th>Kira Süresi(ay)</th>
                        <td>{data.Price?.PeriodCount}</td>
                    </tr>
                    <tr>
                        <th>Kasko</th>
                        <td>{data.Insurance === true ? t("Yes") : t("No")}</td>
                    </tr>
                    <tr>
                        <th>Ücret</th>
                        <td>{data.Price?.PricePerMonth}</td>
                    </tr>
                    <tr>
                        <th>Araç Adet</th>
                        <td>{data.Count}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Step2
