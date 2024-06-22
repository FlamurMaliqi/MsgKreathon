"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Doctor } from "@/app/api/doctor";
import JsonConnectedDatePicker from "@/app/components/jsonUtil/jsonConnectedDate";
import { Allergy, updateAllergy } from "@/app/api/allergy";

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


    var d = new Allergy({
        id: 1,
        allergen: "Pollen",
        patientId: 2,
        reaction: "Niesen",
        dateDiagnosed: new Date(),
        severity: "mittel",
        notes: "Nichts",
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
                                Reaktion
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="reaction"
                                displayName="Reaktion"
                                updateFunction={() => {
                                }}
                            />
                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Schweregrad
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="severity"
                                displayName="Schweregrad"
                                updateFunction={() => {
                                }}
                            />
                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Notizen
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="notes"
                                displayName="Notizen"
                                updateFunction={() => {
                                }}
                            />
                        </div>

                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Diagnosedatum
                            </label>
                            <JsonConnectedDatePicker
                                className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="dateDiagnosed"
                                displayName="Diagnosedatum"
                                updateFunction={() => {
                                }}
                            />
                        </div>

                    </div>
                   
                   


                </form>

                <button className="bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" 
                    type="button"
                    onClick={async () => {
                        await updateAllergy(patientId, d);
                        window.location.href = "/";
                    }}
                    >
                    Speichern
                </button>

            </div>
         
        </main>
    );
}
