"use client";

import SideNav from "../components/SideNav";
import CustomGraph from "../components/graph";
import CustomTable from "../components/table";


export
 default function Test() {
  return (
    <main className="flex min-h-screen">

        {/* <CustomGraph
            json={[
                { date: "2021-01-01", temp: 36.5 },
                { date: "2021-01-02", temp: 37.2 },
                { date: "2021-01-03", temp: 36.8 },
                { date: "2021-01-04", temp: 37.1 },
                { date: "2021-01-05", temp: 36.9 }
            ]}
            title="Test"
            xAxisPath="date"
            yAxisPath="temp"
            columns={ ["Datum", "Temperatur"] }
            useAfterItem={true}
        /> */}


        <CustomTable
            json={[
                { date: "2021-01-01", temp: 36.5 },
                { date: "2021-01-02", temp: 37.2 },
                { date: "2021-01-03", temp: 36.8 },
                { date: "2021-01-04", temp: 37.1 },
                { date: "2021-01-05", temp: 36.9 }
            ]}
            columns={ ["date", "temp"] }
            />



    </main>
  );
}

