import React, { useEffect, useState } from 'react'
import Divider from '../../components/Divider'
import Footer from '../../components/Footer'
import Headers from '../../components/Header'
import CarD from "../../components/CarD"
import FilterDetail from '../../components/FilterDetail'
import Condition from '../../components/Condition'
import Suggestion from '../../components/Suggestion'
import {useParams} from "react-router-dom"
import { CarDetail } from '../../components/CarD/carDetail'
import { useDispatch } from 'react-redux'
import { getCarDetail } from '../../redux/cars'


function Car() {
    //burada dispatch yapalım dataları öyle yollayalım
    const params:any = useParams();
    const [param,setParam] = useState(params.id)
    const dispatch = useDispatch();
    const [selectedCar, setSelectedCar] = useState<CarDetail>();

    useEffect(()=> {
        dispatch(getCarDetail({
            payload: {
                onSuccess: (message, payload) => {
                    setSelectedCar(payload)
                },
                onError: () => { }
            },
            url: `https://otpapidev.komut.team:1471/api/car/${params.id}`
        }))
        console.log(selectedCar)
    },[])
    return (
        <div style={{ width:"100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F7F6" }}>
         
            <Headers />
            <CarD data={selectedCar}/>
            <FilterDetail data={selectedCar}/>
            <Condition/>
            <Suggestion data={selectedCar}/>
            <Divider/>
            <Footer />         

            
        </div>
    )
}

export default Car
