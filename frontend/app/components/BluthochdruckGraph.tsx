"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = [
    {"datum": "2023-01-06", "bluthochdruck": 124.96714153011233},
    {"datum": "2023-01-07", "bluthochdruck": 118.61735698828815},
    {"datum": "2023-01-08", "bluthochdruck": 126.47688538100692},
    {"datum": "2023-01-09", "bluthochdruck": 135.23029856408024},
    {"datum": "2023-01-10", "bluthochdruck": 117.65846625276664},
  ];

  const columns = ["Datum", "Bluthochdruck"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            yAxisPath="bluthochdruck"
            title="Durchschnittlicher Bluthochdruck"
            columns={columns}
            useAfterItem={true}
          />
)
}