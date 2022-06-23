import React, {useState, useEffect} from "react";
import axios from 'axios'

export default function TotalCases(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.covid19api.com/summary`)
            .then(response => {
                setData(response.data.Global)
            })
            .catch(
                console.log("error")
            )
    }, [])


    return(
        <>
        <h1>Total de Casos de COVID</h1>
        <h1>Total confirmados COVID: {data.TotalConfirmed}</h1>
        <h1>Novos confirmados com COVID: {data.NewConfirmed}</h1>
        </>
    )
}