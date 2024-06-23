"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Doctor } from "@/app/api/doctor";
import JsonConnectedDatePicker from "@/app/components/jsonUtil/jsonConnectedDate";
import { Allergy, createAllergy, getAllergies } from "@/app/api/allergy";
import JsonConnectedSelect from "@/app/components/jsonUtil/jsonConnectedSelect";
import Enums from "@/app/api/enums";

export default function Home() {

    const [d, setD] = useState(undefined as Allergy | undefined);

    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "-1");
    
    if (patientId == -1) {
        alert("No patientId and/or allergyId provided in URL")
        return <div></div>
    }

    if (d == undefined) {
        // Create sample allergy
        const k = new Allergy({
            id: undefined,
            allergen: "",
            patientId: patientId,
            reaction: "",
            dateDiagnosed: (new Date()).toDateString(),
            severity: "",
            notes: "",
        });
        setD(k);

    }
   

    if (!d) {
        return <div>Loading...</div>;
    }


    // var d = new Allergy({
    //     id: 1,
    //     allergen: "Pollen",
    //     patientId: 2,
    //     reaction: "Niesen",
    //     dateDiagnosed: new Date(),
    //     severity: "mittel",
    //     notes: "Nichts",
    // });

    // const patientId = 1;


    return (
        <div className="content overflow-y-scroll py-4 grid grid-cols-1 content-evenly justify-items-center">
            <form className="w-full max-w-lg p-4 bg-[--secondary] rounded">
                <h3 className="headline">Allergieinformationen </h3>
                
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                            Allergen
                        </label>
                        {/* <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                            json={d}
                            jsonPath="allergen"
                            displayName="Allergen"
                            updateFunction={() => {
                            }}
                        /> */}

                        <JsonConnectedSelect 
                            json={d} 
                            jsonPath="allergen" 
                            displayName="Allergen" 
                            updateFunction={() => {}} 
                            className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500" 
                            selectables={Enums.PossibleAllergens} 
                        />
                    </div>

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
                        {/* <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                            json={d}
                            jsonPath="severity"
                            displayName="Schweregrad"
                            updateFunction={() => {
                            }}
                        /> */}

                        <JsonConnectedSelect 
                            json={d} 
                            jsonPath="severity" 
                            displayName="Schweregrad" 
                            updateFunction={() => {}} 
                            className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500" 
                            selectables={Enums.PossibleSeverities}
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

                </div>
                
                


            </form>

            <button  className="justify-self-start relative left-0 bottom-[-16px] hover:bg-[var(--primary)] hover:text-[var(--onPrimary)] mt-3 inline-flex w-full justify-center rounded-md bg-white p-1 text-sm font-semibold text-gray-900 shadow-sm border border-[var(--primary)] sm:mt-0 sm:w-auto"
                type="button"
                onClick={async () => {
                    await createAllergy(patientId, d);
                    alert("Allergie wurde gespeichert")
                    window.location.href = "/Krankheitsbild?" + "patientId=" + patientId;
                }}
                >
                Speichern
            </button>

        </div>
    );
}
