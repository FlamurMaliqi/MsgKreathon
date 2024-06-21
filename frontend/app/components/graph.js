import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";


  
// Todo: Needs to be designed!
const CustomGraph = ({ json, xAxisPath, yAxisPath, title, columns, useAfterItem}) => {

    const [data, setData] = useState([]);

    var afterTime = null;

    function genData(xAxisPath, yAxisPath) {
        return json.filter((item) => {
            return !afterTime || new Date(item[xAxisPath]) > afterTime;
        }
        ).map((item) => {
            const xValue = item[xAxisPath];
            const yValue = item[yAxisPath];
            const x = isNaN(xValue) ? new Date(xValue) : Number(xValue);
            const y = Number(yValue);
            return [x, y];
        });
    }

    useEffect(() => {
        setData(genData(xAxisPath, yAxisPath));
    }, [json, xAxisPath, yAxisPath, afterTime]);
    
    function dateSetterButton(daysBefore) {
        if (daysBefore === undefined) {
            return <button onClick={() => {
                afterTime = null;
                setData(genData(xAxisPath, yAxisPath));
            }}> Alle</button>
        }
        return <button onClick={() => {
            afterTime = new Date();
            afterTime.setDate(afterTime.getDate() - daysBefore);
            setData(genData(xAxisPath, yAxisPath));
        }}> {daysBefore} Tage</button>
    }
    
 

    return (
<div>   

        {data.length == 0 ? 
                <div>Keine Daten vorhanden</div>    :
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={[columns, ...data]}
                chartLanguage='de'
                
                options={{
                    title: title,
                    language: "de",
                    legend: { position: 'none' },
                }}
            />
        }

        {!useAfterItem ? <div> </div> :
        <div>
            
            {dateSetterButton(7)}

            {dateSetterButton(30)}

            {dateSetterButton(90)}

            {dateSetterButton(365)}

            {dateSetterButton()}

        </div>}
        

        </div>
    );
    
}


export default CustomGraph;