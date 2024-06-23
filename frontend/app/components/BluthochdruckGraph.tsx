"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = [
    {"datum": "2023-01-06", "bluthochdruck": 124.96714153011233, "Richtwert":120},
    {"datum": "2023-01-07", "bluthochdruck": 118.61735698828815, "Richtwert":120},
    {"datum": "2023-01-08", "bluthochdruck": 126.47688538100692, "Richtwert":120},
    {"datum": "2023-01-09", "bluthochdruck": 135.23029856408024,  "Richtwert":120},
    {"datum": "2023-01-10", "bluthochdruck": 117.65846625276664, "Richtwert":120},
  ];

  const columns = ["Datum", "Bluthochdruck", "Richtwert"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            y1AxisPath="bluthochdruck"
            y2AxisPath={"Richtwert"}
            title="Durchschnittlicher Bluthochdruck"
            columns={columns}
            useAfterItem={true}
          />
)
}