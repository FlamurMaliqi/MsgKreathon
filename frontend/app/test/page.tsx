"use client";

import JsonConnectedTextField from "../components/jsonUtil/jsonConnectedFormField";
import {Doctor} from "../api/doctor";

export
 default function Test() {

    var d = new Doctor({
        doctorId: 1,
        name: "TestDoktor",
        surname: "TestNachname",
        speciality: "TestFach",
        email: "",
        phone: "",
        street: "",
        houseNumber: "",
        postalCode: "",
        city: ""
    });

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



        <JsonConnectedTextField
            json={d}
            jsonPath="name"
            displayName="Test"
            updateFunction={() => {
                console.log(d.name)
            }}
        />




    </main>
  );
}

