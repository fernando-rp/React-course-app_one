import React from 'react'

import CharBar from './ChartBar'

import './Chart.css'



const Chart=(props)=>{

    const datePointValues=props.datePoints.map(datePoint=>datePoint.value)

    const totalMaximum= Math.max(...datePointValues)

    return(
        <div className="chart">
            {props.datePoints.map((datePoint)=>{
                return(
                    <CharBar 
                    value={datePoint.value}
                    maxValue={totalMaximum}
                    label={datePoint.label}
                    />
                )
            })}
        </div>
    )

}

export default Chart;