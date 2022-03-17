import React from 'react'
import { ExtraService, GarageCartItem } from '../MyGarage/type'
import "./style.scss"
function Step1({
    setStep,
    extraServices,
    data,
  }: {
    setStep: (step: number) => void;
    extraServices: ExtraService[];
    data: GarageCartItem;
}) {
    return (
        <div className='step1-component'>
            <div className='c-body-plus'>
                    <div className='condition-card'>
                        <p className='c-body-title'><input type="checkbox"></input> Sigorta</p>
                        <div>
                            <p className='c-body-subtitle'>Sigorta Açıklama</p>
                        </div>
                    </div>
                    <div className='condition-card'>
                        <p className='c-body-title'> <input type="checkbox"></input> tESTRT</p>
                        <div>
                            <p className='c-body-subtitle'>TR</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Step1
