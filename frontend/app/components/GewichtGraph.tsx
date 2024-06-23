"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = 
    [
    {"datum": "2023-01-01", "gewicht": 70.5},
    {"datum": "2023-01-02", "gewicht": 70.3},
    {"datum": "2023-01-03", "gewicht": 70.2},
    {"datum": "2023-01-04", "gewicht": 70.4},
    {"datum": "2023-01-05", "gewicht": 70.1}
]


  const columns = ["Datum", "gewicht"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            yAxisPath="gewicht"
            title="Gewichtsverlauf"
            columns={columns}
            useAfterItem={true}
          />
)
}