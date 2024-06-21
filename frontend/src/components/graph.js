import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

  
// Todo: Needs to be designed!
const CustomGraph = ({ json, xAxisPath, yAxisPath, title, columns}) => {


    function genData(xAxisPath, yAxisPath) {
        return json.map((item) => {
            const xValue = item[xAxisPath];
            const yValue = item[yAxisPath];
            const x = isNaN(xValue) ? new Date(xValue) : Number(xValue);
            const y = Number(yValue);
            return [x, y];
        });
    }

    const data = genData(xAxisPath, yAxisPath);

    return (
        <div>   


        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[columns, ...data]}
           
        />

        </div>
    );
    
}


export default CustomGraph;