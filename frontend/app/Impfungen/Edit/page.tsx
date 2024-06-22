"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Vaccination, updateVaccination, getVaccination } from "@/app/api/vaccination";
import { Doctor } from "@/app/api/doctor";
import JsonConnectedDatePicker from "@/app/components/jsonUtil/jsonConnectedDate";

export default function Home() {
    // const [d, setD] = useState(null as unknown as Vaccination);

    // const urlParams = new URLSearchParams(window.location.search)
    // const patientId = parseInt(urlParams.get('patientId') || "1");
    // const vaccinationId = parseInt(urlParams.get('vaccinationId') || "1");
   
    // useEffect(() => {
    //     getVaccination(patientId, vaccinationId).then((vaccination) => {
    //         setD(vaccination);
    //     });

    // }, []);

    // if (!d) {
    //     return <div>Loading...</div>;
    // }


    var d = new Vaccination({
        id: 1,
        vaccineName: "Biontech",
        vaccinationDate: new Date(),
        administeringDoctor: {
            id: 1,
            name: "Max",
            surname: "Mustermann",
            email: "",
            phone: "",
            speciality: "",
            street: "",
            houseNumber: "",
            city: "",
            postalcode: ""
        },
        patientId: 2,
        dose: "30 mg",
        notificationDate: new Date(),
    });

    const patientId = 1;


    return (
        <main className="main-grid grid min-h-screen">
            <HeaderNav></HeaderNav>
            <SideNav />
            <div className="content h-[92vh] w-[88vw] overflow-y-scroll py-4 grid grid-cols-1 content-evenly justify-items-center">
                <form className="w-full max-w-lg p-4 bg-[--secondary] rounded">
                    <h3>Impfungsinformationen </h3>
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Name
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="vaccineName"
                                displayName="Impfstoff"
                                updateFunction={() => {
                                }}></Input>
                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Dosis
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="dose"
                                displayName="Dosis"
                                updateFunction={() => {
                                }}></Input>
                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Impfdatum
                            </label>
                            <JsonConnectedDatePicker
                                className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="vaccinationDate"
                                displayName="Impfdatum"
                                updateFunction={() => {
                                }}
                            />

                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Benachrichtigungsdatum
                            </label>
                            <JsonConnectedDatePicker
                                className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="notificationDate"
                                displayName="Benachrichtigungsdatum"
                                updateFunction={() => {
                                }}
                            />
                        </div>
                        
                    </div>
                   
                   


                </form>

                <button className="bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" 
                    type="button"
                    onClick={async () => {
                        await updateVaccination(patientId, d);
                        window.location.href = "/";
                    }}
                    >
                    Speichern
                </button>

            </div>
         
        </main>
    );
}
