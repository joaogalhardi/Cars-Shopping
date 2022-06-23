import React, {useState, useEffect} from "react";
import axios from 'axios'
import TotalCases from "../../components/TotalCases";

export default function Home(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.covid19api.com/summary`)
            .then(response => {
                setData(response.data.Countries)
            })
            .catch(
                console.log("error")
            )
    }, [])
    const [busca,setBusca] = useState('')
    const casesFilter = data.filter((ite) => ite.Country.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
    return(
        <>
        <TotalCases/>
        <input type="text" name="name" value={busca} onChange={(ev) =>setBusca(ev.target.value)}placeholder="Digite aqui sua busca..."></input>
        {casesFilter.map(item => {
            return(
                <>
            <h1>{item.Country}</h1>
            <h4>Total de casos em {item.Country}: {item.TotalConfirmed}</h4>
            <h4>Total de mortes em {item.Country}: {item.TotalDeaths}</h4>
            <h4>Novos casos em {item.Country}: {item.NewConfirmed}</h4>
            <h4>Novas mortes em {item.Country}: {item.NewDeaths}</h4>
            </>
            )
        })}
        </>
    )
}