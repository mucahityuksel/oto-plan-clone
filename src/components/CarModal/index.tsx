import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Button, ButtonGroup } from "rsuite"
import { generateUUID } from '../../helpers/guid';
import garageCart, { garageCartSelector } from '../../redux/garage';
import { CarDetail } from '../CarD/carDetail';
import { Car } from '../Cars/car';
import { Color, ExtraService, GarageCartItem, Price } from '../MyGarage/type';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import "./style.scss"

const CarModal = ({
    data,
    visible,
    handleClose,
    extraServices,
    isEditing,
    colors,
    price,
}: {
    data: GarageCartItem;
    visible: boolean;
    extraServices?: ExtraService[];
    colors: Color[];
    isEditing: boolean;
    price: Price[];
    handleClose: () => void;

}) => {
    const dispatch = useDispatch();
    const [step, setStep] = React.useState(0);
    const x = useSelector((state) => state);
    //const garageCartRef = useRef(garageCarts);


    const onChange = (nextStep: number) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const save = (data: any) => {
        console.log(data)
        data.Id=generateUUID()
        dispatch(garageCart.actions.addToGarage(data))
        console.log("state");
        console.log(x)
    }
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    return (
        <div className='steps-modal'>
            <div className='steps-numbers'>
                <Steps current={step} className='steps'>
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                </Steps>
            </div>

            {step === 0 && (
                <Step0
                    setStep={setStep}
                    data={data}
                    price={data.Car?.Prices ? data.Car.Prices : []}
                    colors={colors}

                />
            )}
            {step === 1 && (
                <Step1
                    data={data}
                    setStep={setStep}
                    extraServices={extraServices ? extraServices : []}
                />
            )}
            {
                step === 2 && (
                    <Step2
                        data={data}
                        setStep={setStep}
                        handleClose={handleClose}
                        isEditing={isEditing}
                    />
                )
            }
            <div style={{ alignItems: "center", padding: "25px 100px", maxWidth: "1200px", width: "100%" }}>

                <ButtonGroup className='modal-footer'>

                    <Button onClick={onPrevious} disabled={step === 0} className='next-button1'>
                        Önceki
                    </Button>
                    <div className='modal-step-footer'>
                        <div className='modal-footer-text'>
                            Aylık Kira Tutarı <div> ₺{data?.Price?.PricePerMonth}</div> + KDV
                        </div>
                        <Button onClick={() => {
                            if (step === 2) {
                                
                                save(data)
                            } else {
                                onNext()
                            }

                        }} className='next-button'>
                            {step === 2 ? "Garaja Ekle" : "İleri"}
                        </Button>
                    </div>

                </ButtonGroup>
            </div>

        </div>
    )
}

export default CarModal
