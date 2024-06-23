"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = [
    {"datum": "2023-01-06", "blutzucker": 92.4, "Richtwert":90},
    {"datum": "2023-01-07", "blutzucker": 85.6, "Richtwert":90},
    {"datum": "2023-01-08", "blutzucker": 98.2, "Richtwert":90},
    {"datum": "2023-01-09", "blutzucker": 95.1, "Richtwert":90},
    {"datum": "2023-01-10", "blutzucker": 87.2, "Richtwert":90},
  ];

  const columns = ["Datum", "blutzucker", "Richtwert"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            y1AxisPath="blutzucker"
            y2AxisPath="Richtwert"
            title="Durchschnittlicher Bluthochdruck"
            columns={columns}
            useAfterItem={true}
          />
)
}