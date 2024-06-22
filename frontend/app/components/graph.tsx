import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";


  
// Todo: Needs to be designed!
const CustomGraph = ({ json, xAxisPath, yAxisPath, title, columns, useAfterItem} : {
    json: any,
    xAxisPath: string,
    yAxisPath: string,
    title: string,
    columns: any,
    useAfterItem: boolean
}) => {

    const [data, setData] = useState([]);

    var afterTime:Date | undefined;

    function genData(xAxisPath:string, yAxisPath:string) {
        return json.filter((item:any) => {
            return !afterTime || new Date(item[xAxisPath]) > afterTime;
        }
        ).map((item:any) => {
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
    
    function dateSetterButton(daysBefore: number | undefined): JSX.Element {
        if (daysBefore === undefined) {
            return <button onClick={() => {
                afterTime = undefined;
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

            {dateSetterButton(undefined)}

        </div>}
        

        </div>
    );
    
}


export default CustomGraph;