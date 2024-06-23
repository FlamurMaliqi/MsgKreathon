"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = 
    [
    {"datum": "2023-01-01", "gewicht": 70.5, "Richtwert":70.0},
    {"datum": "2023-01-02", "gewicht": 70.3, "Richtwert":70.0},
    {"datum": "2023-01-03", "gewicht": 70.2, "Richtwert":70.0},
    {"datum": "2023-01-04", "gewicht": 70.4, "Richtwert":70.0},
    {"datum": "2023-01-05", "gewicht": 70.1, "Richtwert":70.0}
]


  const columns = ["Datum", "gewicht", "Richtwert"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            y1AxisPath="gewicht"
            y2AxisPath={"Richtwert"}
            title="Gewichtsverlauf"
            columns={columns}
            useAfterItem={true}
          />
)
}