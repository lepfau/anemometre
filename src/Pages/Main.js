import React, { useState, useEffect }  from 'react'
import axios from "axios"
import Chart from "../Components/Chart"

function Main() {
    const [data, setData] = useState([]);
    const [numerobalise, setNumerobalise] = useState([]);
    const [chosenBalise, setChosenbalise] = useState("10");

    const [oneBaliseData, setOnebaliseData] = useState([{
        idbalise: "144",
        date: "2021-09-16 12:46:16",
        vitesseVentMoy: "2",
        vitesseVentMax: "12",
        vitesseVentMin: "0",
        directVentMoy: "224",
        directVentInst: "224",
        temperature: "13",
        hydrometrie: null,
        pression: null,
        luminosite: null,
        LUM: "65"
        }])

    const listBalises = numerobalise.map((balise) => <option value={balise}>{balise}</option>)

    useEffect(async () => {
      const result = await axios(
        'https://data.ffvl.fr/json/relevesmeteo.json',
      );
      //toute la base de données
        setData(result.data);
    //afficher liste select numero balise
        const balises = data.map((balise) => balise.idbalise);
        setNumerobalise(balises);

    }, [data], [numerobalise]);

    useEffect(async () => {
        if (oneBaliseData) {
        const result = await axios(
          'https://data.ffvl.fr/json/relevesmeteo.json',
        );
        const filtered = result.data.filter((balise) => balise.idbalise === chosenBalise)
      setOnebaliseData(filtered)
      //afficher liste select numero balise
        }
      }, [oneBaliseData, chosenBalise]);
      

    return (
        <div>
            <h1>Homepage</h1>
            <select placeholder="Numéro balise" onChange={(event) => setChosenbalise(event.target.value)}>
{listBalises}
            </select>
   <Chart oneBaliseData={oneBaliseData}/>
        </div>
    )
}

export default Main
