import React, {useState, useEffect} from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Todo: Needs to be designed!
const CustomGraph = ({ json, xAxisPath, yAxisPath, title }) => {


    function genXAxis(path) {
        return json.map((item) => {
            const value = item[path];
            return isNaN(value) ? new Date(value) : Number(value);
        });
    }

    function genYAxis(path) {
        return json.map((item) => {
            const value = item[path];
            return Number(value);
        });
    }


    const xAxis = genXAxis(xAxisPath);
    const yAxis = genYAxis(yAxisPath);

    if (xAxis === undefined || yAxis === undefined || xAxis.length === 0 || yAxis.length === 0) {
        return (
            <div>
                <h1>Graph is loading.. </h1>
            </div>
        );
    }

    return (
        <div>   


            <Line data={{

                label: title,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                xAxis: xAxis,
                yAxis: yAxis,
                
            }} />
        </div>
    );
    
}


export default CustomGraph;