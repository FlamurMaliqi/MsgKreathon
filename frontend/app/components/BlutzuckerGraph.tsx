"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = [
    {"datum": "2023-01-06", "blutzucker": 92.4},
    {"datum": "2023-01-07", "blutzucker": 85.6},
    {"datum": "2023-01-08", "blutzucker": 98.2},
    {"datum": "2023-01-09", "blutzucker": 95.1},
    {"datum": "2023-01-10", "blutzucker": 87.2},
  ];

  const columns = ["Datum", "blutzucker"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            yAxisPath="blutzucker"
            title="Durchschnittlicher Bluthochdruck"
            columns={columns}
            useAfterItem={true}
          />
)
}