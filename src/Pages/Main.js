import React, { useState, useEffect }  from 'react'
import axios from "axios"

function Main() {
    const [data, setData] = useState([])

    useEffect(async () => {
      const result = await axios(
        'https://data.ffvl.fr/json/relevesmeteo.json',
      );
      const final = result.data.sort((a, b) => (a.idbalise - b.idbalise))
      setData(final)
    });
  
    return (
        <div>
            <h1>Homepage</h1>
            {data.map((elem) => {

                const {idbalise, directVentMoy, temperature} = elem;
                return (
                    <div style={{border: "1px solid black"}}>
                    <p>N° Balise :{idbalise}</p>
                    <p>Vent moyen:{directVentMoy}</p>
                    {temperature ? <p>Temperature:{temperature} °C</p> : <p>Température non</p>}
                
                    </div>
                )
            })}
        </div>
    )
}

export default Main
