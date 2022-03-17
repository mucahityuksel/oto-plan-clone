import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Sidenav, Nav, Dropdown, Checkbox, Button } from "rsuite"
import { CarLookup, FilterObject, Model } from '../../redux/actions';
import { getCarLookupList, getFilterCarList } from '../../redux/cars';
import { Car } from '../Cars/car';
function DetailFilter({ setCars }: { setCars: (car: Car[]) => void }) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [carlookup, setCarlookup] = useState<CarLookup>();
    const [models, setModels] = useState<Model[]>([]);
    const filterRef = useRef<FilterObject>({
        brand: [],
        model: [],
        bodyType: [],
        gearType: [],
        fuelType: [],
    });
    useEffect(() => {
        dispatch(
            getCarLookupList({
                payload: {
                    onSuccess: (message, payload) => {
                        setCarlookup(payload);
                        setModels(payload.CarModels);
                    },
                    onError: (message) => { },
                },
                url: "https://otpapidev.komut.team:1471/api/car/carlookupdetails"
            })
        );
    }, []);
    return (

        <div style={{ width: 240 }}>
            <Sidenav activeKey="1">
                <Sidenav.Body>
                    <Nav>
                        <Dropdown eventKey="1" title={t("Brand")} >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {carlookup?.CarBrandDetailDto.map((brand) => {
                                    return <div>
                                        <Checkbox
                                            defaultChecked={
                                                filterRef.current.brand.some((x) => x === brand.Id)
                                                    ? true
                                                    : false
                                            }
                                            onChange={(value, checked, event) => {
                                                if (checked) {
                                                    filterRef.current.brand?.push(brand.Id);
                                                    if (filterRef.current.brand.length <= 1) {
                                                        const newModels = carlookup.CarModels.filter(
                                                            (x) => x.BrandName === brand.BrandName
                                                        );
                                                        setModels(newModels);
                                                    } else {
                                                        const filterArray = carlookup.CarModels.filter(
                                                            (x) => x.BrandName === brand.BrandName
                                                        );
                                                        const newModels = models.concat(filterArray);
                                                        setModels(newModels);
                                                    }
                                                } else {
                                                    filterRef.current.brand =
                                                        filterRef.current.brand?.filter(
                                                            (x) => x !== brand.Id
                                                        );
                                                    if (filterRef.current.brand.length !== 0) {
                                                        const newModels = models.filter(
                                                            (x) => x.BrandName !== brand.BrandName
                                                        );
                                                        setModels(newModels);
                                                    } else {
                                                        setModels(carlookup.CarModels);
                                                    }
                                                }
                                            }}
                                        >
                                            {brand.BrandName}
                                        </Checkbox>
                                    </div>
                                })
                            }
                            </div>
                        </Dropdown>
                        <Dropdown eventKey="2" title="Model" >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {carlookup?.BodyTypes.map((body) => {
                                    return <div>
                                        <Checkbox
                                            onChange={(value, checked) => {
                                                if (checked) {
                                                    filterRef.current.bodyType?.push(body.Id);
                                                } else {
                                                    filterRef.current.bodyType =
                                                        filterRef.current.bodyType?.filter(
                                                            (x) => x !== body.Id
                                                        );
                                                }
                                            }}
                                        >
                                            {body.Name}
                                        </Checkbox>
                                    </div>
                                })
                              }
                            </div>
                        </Dropdown>
                        <Dropdown eventKey="3" title={t("Fuel Type")} >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {carlookup?.FuelTypes.map((fuel) => (
                                    <div>
                                        <Checkbox
                                            onChange={(value, checked) => {
                                                if (checked) {
                                                    filterRef.current.fuelType?.push(fuel.Id);
                                                } else {
                                                    filterRef.current.fuelType =
                                                        filterRef.current.fuelType?.filter(
                                                            (x) => x !== fuel.Id
                                                        );
                                                }
                                            }}
                                        >
                                            {fuel.Name}
                                        </Checkbox>
                                    </div>
                                ))
                             }
                            </div>
                        </Dropdown>
                        <Dropdown eventKey="4" title={t("Gear Type")} >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {carlookup?.GearTypes.map((gear) => (
                                    <div>
                                        <Checkbox
                                            onChange={(value, checked) => {
                                                if (checked) {
                                                    filterRef.current.gearType?.push(gear.Id);
                                                } else {
                                                    filterRef.current.gearType =
                                                        filterRef.current.gearType?.filter(
                                                            (x) => x !== gear.Id
                                                        );
                                                }
                                            }}
                                        >
                                            {gear.Name}
                                        </Checkbox>
                                    </div>
                                ))}
                            </div>
                        </Dropdown>

                        <Button appearance="default"
                            onClick={() => {
                                const _brand =
                                    filterRef.current.brand.length === 0
                                        ? undefined
                                        : filterRef.current.brand;

                                const _model =
                                    filterRef.current.model.length === 0
                                        ? undefined
                                        : filterRef.current.model;
                                const _bodyType =
                                    filterRef.current.bodyType.length === 0
                                        ? undefined
                                        : filterRef.current.bodyType;
                                const _fuelType =
                                    filterRef.current.fuelType.length === 0
                                        ? undefined
                                        : filterRef.current.fuelType;
                                const _gearType =
                                    filterRef.current.gearType.length === 0
                                        ? undefined
                                        : filterRef.current.gearType;

                                let path = `?brand=${_brand}&model=${_model}&bodyType=${_bodyType}&gearType=${_gearType}&fuelType=${_fuelType}`;

                                dispatch(
                                    getFilterCarList({
                                        payload: {
                                            onSuccess: (message, payload) => {
                                                setCars(payload);
                                            },
                                            onError: (message) => { },
                                        },
                                        url: "https://otpapidev.komut.team:1471/api/car/filter" + path,
                                    })
                                );
                            }}
                            style={{ width: "240px", backgroundColor: "#E02825", color: "white", fontWeight: "600" }}>{t("Search")}</Button>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>

    )
}

export default DetailFilter
