import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import axios from "axios"

function Chart(props) {


  const state = {
    labels: [props.oneBaliseData[0].date],
    datasets: [
      {
        label: 'Temperature',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.oneBaliseData[0].temperature]
      }
    ]
  }

  return (
  <div style={{width:"600px", height:"600px"}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  )
}

export default Chart



