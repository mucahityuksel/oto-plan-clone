import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import FilterItems from '../FilterItems';
import data from "../../car_detail.json"
import { SelectPicker } from 'rsuite';
import { Select, Input } from 'antd';
import { useHistory } from "react-router-dom"
import 'rsuite/dist/rsuite.min.css'
import "./style.scss"
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CarLookup, Model } from '../../redux/actions';
import { getBrandDetail, getCarLookupList } from '../../redux/cars';
import * as Yup from "yup";
import { Formik } from 'formik';

type FilterType = {
    brand: string;
    model: string;
    bodyType: string;
    fuelType: string;
    gearType: string;
};

function FilterBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [carlookup, setCarlookup] = useState<CarLookup>();
    const [models, setModels] = useState<Model[]>([]);

    const [car, setCar] = useState({
        brand: "",
        model: "",
        bodyType: "",
        fuelType: "",
        gearType: ""
    })
    useEffect(() => {
        dispatch(
            getCarLookupList({
                payload: {
                    onSuccess: (message, payload) => setCarlookup(payload),
                    onError: (message) => { },
                },
                url: "",
            })
        );

    }, []);
    const ValidationSchema = Yup.object().shape({});
    const onSubmitPress = ({
        brand,
        model,
        bodyType,
        fuelType,
        gearType,
    }: FilterType) => {
        const _brand = brand === "" ? undefined : brand;
        const _model = model === "" ? undefined : model;
        const _bodyType = bodyType === "" ? undefined : bodyType;
        const _fuelType = fuelType === "" ? undefined : fuelType;
        const _gearType = gearType === "" ? undefined : gearType;

        let path = "/cars";

        path += `?brand=${_brand}&model=${_model}&bodyType=${_bodyType}&gearType=${_gearType}&fuelType=${_fuelType}`;
        history.push(path);
    };

    const { t, i18n } = useTranslation();
    return (
        <Formik
            initialValues={{
                brand: "",
                model: "",
                bodyType: "",
                fuelType: "",
                gearType: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={onSubmitPress}>
            {({ handleSubmit, values, errors, touched }) => {
                return (
                    <div className='filter-component' >
                        <div className='filter-container' >
                            <SelectPicker className='select-picker' labelKey="BrandName" valueKey="Id" placement='topStart' data={
                                carlookup?.CarBrandDetailDto
                                    ? carlookup?.CarBrandDetailDto
                                    : []
                            }
                                onSelect={(e, item) => {
                                    dispatch(
                                        getBrandDetail({
                                            payload: {
                                                onSuccess: (message, payload) => {
                                                    setModels(payload.CarModels);
                                                    values.brand = e;
                                                },
                                                onError: (message) => { },
                                            },

                                            url: "" + item.Id,
                                        })
                                    );
                                }}
                                placeholder={t("Brand")} style={{ width: "220px" }} />
                            <SelectPicker className='select-picker' labelKey="ModelName" valueKey="Id" placement='topStart' onSelect={(value) => (values.model = value)} data={models} placeholder={t("Model")} style={{ width: "220px" }} />
                            <SelectPicker className='select-picker' labelKey="Name" valueKey="Id" placement='topStart' onSelect={(value) => (values.bodyType = value)} data={carlookup?.BodyTypes ? carlookup?.BodyTypes : []} placeholder={t("Body Type")} style={{ width: "220px" }} />
                            <SelectPicker className='select-picker' labelKey="Name" valueKey="Id" placement='topStart' onSelect={(value) => (values.fuelType = value)} data={carlookup?.FuelTypes ? carlookup?.FuelTypes : []} placeholder={t("Fuel Type")} style={{ width: "220px" }} />
                            <SelectPicker className='select-picker' labelKey="Name" valueKey="Id" placement='topStart' onSelect={(value) => (values.gearType = value)} data={carlookup?.GearTypes ? carlookup?.GearTypes : []} placeholder={t("Gear Typye")} style={{ width: "220px" }} />
                            <div style={{ display: "flex", justifyContent: "center", height: "40px", border: "none",borderRadius:"5px", alignItems: "center", width: "220px", backgroundColor: "#E02825" }}>
                                <button onClick={() => { handleSubmit() }} style={{ border: "none", outline: "none",borderRadius:"5px", height: "40px", cursor: "pointer", backgroundColor: "#E02825", color: "white", fontSize: "18px", fontWeight: "600" }}>{t("Filter")}</button>
                            </div>
                        </div>
                    </div>
                )
            }
            }
        </Formik>



    )
}

export default FilterBar
