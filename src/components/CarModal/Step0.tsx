import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { SelectPicker, Input, InputGroup } from "rsuite"
import { ItemDataType } from 'rsuite/esm/@types/common';
import { Color, GarageCartItem, Price } from '../MyGarage/type';

function Step0({
    data,
    setStep,
    price,
    colors
}: {
    data: GarageCartItem;
    setStep: (step: number) => void;
    price?: Price[];
    colors: Color[]
}) {
    const [value, setValue] = useState<number>(data.Count);
    const [monthlyPrice, setPrice] = useState<number>(0);
    const { t, i18n } = useTranslation();
    const [kmLimit, setKmLimit] = useState<Price[]>(
        data.Price ? [data.Price] : []
    );
    const handleMinus = () => {
        if (value - 1 > 0) {
            setValue(value - 1);
            data.Count = value - 1;
        }
    };
    const handlePlus = () => {
        setValue(value + 1);
        data.Count = value + 1;
    };
   
    return (
        <div className='step-component'>
            <div className='step-title'>
                <p className='step-title-header'>{data?.Car?.CarBrand} {data?.Car?.CarModel}</p>
                <p className='step-title-sub'>{data?.Car?.CarVersion} {data?.Car?.CarPack}</p>
            </div>
            <div className='step-bar'>
                <div className='step-item'>
                    <p>{t("Color")}</p>
                    <SelectPicker
                        placeholder={t("Color")}
                        data={colors}
                        placement='bottomStart'
                        defaultValue={data.Color?.Id}
                        labelKey='Name'
                        valueKey='Id'
                        onSelect={(value: string, item: any, event) => {
                            data.Color = item
                        }}
                        style={{ width: 180 }} />
                </div>
                <div className='step-item'>
                    <p>{t("Period")}</p>
                    <SelectPicker
                        placeholder={t("Period")}
                        data={price ? price : []}
                        placement='bottomStart'
                        defaultValue={data.Price?.PeriodId}
                        labelKey="PeriodCount"
                        valueKey="PeriodId"
                        onSelect={(value: string, item: ItemDataType, event) => {
                            const kmArray = price?.filter(
                                (x) => x.PeriodId === value
                            );
                            kmArray ? setKmLimit(kmArray) : setKmLimit([]);
                        }}
                        style={{ width: 180 }} />
                </div>
                <div className='step-item'>
                    <p>{t("KM Limit")}</p>
                    <SelectPicker
                        placeholder={t("KM Limit")}
                        data={kmLimit}
                        defaultValue={data.Price?.Id}
                        placement="bottomStart"
                        labelKey="KMLimitPerYear"
                        valueKey="Id"
                        style={{ width: 180 }}
                        onSelect={(value: string, item: any, event) => {
                            data.Price = item;
                            setPrice(
                                data.Price?.PricePerMonth ? data.Price.PricePerMonth : 0
                            );
                        }}
                    />
                </div>
                <div className='step-item'>
                    <p>{t("Insurance")}</p>
                    <SelectPicker placeholder={t("Insurance")} data={[
                        { label: t("Yes"), value: t("Yes") },
                        { label: t("No"), value: t("No") },
                    ] as ItemDataType[]}
                        style={{ width: 180 }}
                        placement="bottomStart"
                        defaultValue={data.Insurance ? t("Yes") : t("No")}
                        onSelect={(value: string, item: ItemDataType, event) => {
                            value === t("Yes")
                                ? (data.Insurance = true)
                                : (data.Insurance = false);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "start" }}>
                    <div><p>{t("Count")}</p></div>
                    <div className="number-box">
                        <InputGroup.Button onClick={handleMinus}>
                            -
                        </InputGroup.Button>
                        <Input
                            className={"custom-input-number"}
                            value={data.Count ? data.Count : 0}
                        />
                        <InputGroup.Button onClick={handlePlus}>
                            +
                        </InputGroup.Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step0
