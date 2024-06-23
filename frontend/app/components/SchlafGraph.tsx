"use client"
import CustomGraph from "./graph";
export default function Graph()
{
    const jsonData = 
   [
    {"datum": "2023-01-01", "Schlaf": 7.5, "Richtwert":8.0},
    {"datum": "2023-01-02", "Schlaf": 6.8, "Richtwert":8.0},
    {"datum": "2023-01-03", "Schlaf": 7.2,  "Richtwert":8.0},
    {"datum": "2023-01-04", "Schlaf": 8.0, "Richtwert":8.0},
    {"datum": "2023-01-05", "Schlaf": 6.5, "Richtwert":8.0}
]

  const columns = ["Datum", "Schlaf", "Richtwert"];
  return(
  <CustomGraph
            json={jsonData}
            xAxisPath="datum"
            y1AxisPath="Schlaf"
            y2AxisPath={"Richtwert"}
            title="Schalfverlauf"
            columns={columns}
            useAfterItem={true}
          />
          
)
}