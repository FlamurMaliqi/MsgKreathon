import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

// Todo: Needs to be designed!
const CustomGraph = ({ json, xAxisPath, y1AxisPath, y2AxisPath, title, columns, useAfterItem }) => {
  const [data, setData] = useState([]);

  var afterTime = undefined;

  function genData() {
    return json
      .filter((item) => {
        return !afterTime || new Date(item[xAxisPath]) > afterTime;
      })
      .map((item) => {
        const xValue = item[xAxisPath];
        const y1Value = item[y1AxisPath];
        const y2Value = item[y2AxisPath];
        const x = isNaN(xValue) ? new Date(xValue) : Number(xValue);
        const y1 = Number(y1Value);
        const y2 = Number(y2Value);
        return [x, y1, y2];
      });
  }

  useEffect(() => {
    setData(genData());
  }, [json, afterTime]);

  function dateSetterButton(daysBefore) {
    if (daysBefore === undefined) {
      return (
        <button
          onClick={() => {
            afterTime = undefined;
            setData(genData());
          }}
        >
          Alle
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          afterTime = new Date();
          afterTime.setDate(afterTime.getDate() - daysBefore);
          setData(genData());
        }}
      >
        {daysBefore} Tage
      </button>
    );
  }

  const minDate = new Date(json[0][xAxisPath]);
  const maxDate = new Date(json[json.length - 1][xAxisPath]);

  return (
    <div>
      {data.length === 0 ? (
        <div>Keine Daten vorhanden</div>
      ) : (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={[columns, ...data]}
          chartLanguage="de"
          options={{
            title: title,
            language: 'de',
            legend: { position: 'top' },
            hAxis: {
              title: 'Datum',
              viewWindow: {
                min: minDate,
                max: maxDate,
              },
            },
            vAxis: {
              title: 'Werte',
            },
            series: {
              0: { targetAxisIndex: 0 },
              1: { targetAxisIndex: 1 },
            },
            vAxes: {
              0: { title: 'Schlaf (Stunden)' },
              1: { title: 'Gewicht (kg)' },
            },
          }}
        />
      )}
      {/* {useAfterItem && (
        <div>
          {dateSetterButton(7)}
          {dateSetterButton(30)}
          {dateSetterButton(90)}
          {dateSetterButton(365)}
          {dateSetterButton(undefined)}
        </div>
      )} */}
    </div>
  );
};

export default CustomGraph;
