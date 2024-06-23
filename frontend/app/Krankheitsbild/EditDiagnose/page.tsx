"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Doctor } from "@/app/api/doctor";
import JsonConnectedDatePicker from "@/app/components/jsonUtil/jsonConnectedDate";
import { Diagnosis, createDiagnosis, getDiagnosis } from "@/app/api/diagnosis";
import account from "@/app/api/account";
import JsonConnectedSelect from "@/app/components/jsonUtil/jsonConnectedSelect";
import enums from "@/app/api/enums";

export default function Home() {

    const [d, setD] = useState(null as unknown as Diagnosis);

    // const urlParams = new URLSearchParams(window.location.search)
    // const patientId = parseInt(urlParams.get('patientId') || "1");
    // const diagnosisId = parseInt(urlParams.get('vaccinationId') || "1");
   
    // useEffect(() => {
    //     getDiagnosis(patientId, diagnosisId).then((diagnosis) => {
    //         setD(diagnosis);
    //     });

    // }, []);

    // if (!d) {
    //     return <div>Loading...</div>;
    // }

    if (!account.loggedIn || !account.isDoctor) {
        return <div> No Permission to create this </div>
    }

    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "-1");

    
    if (d == undefined) {
        const l = new Diagnosis({
            id: undefined,   
            patientId: patientId,
            illness: "",
            dateDiagnosed: (new Date()).toDateString(),
            severity: "",
            description: "",
            issuedBy: {
                doctorId: account.userId,
                name: "",
                surname: "",
                speciality: "",
                email: "",
                phone: "",
                street: "",
                houseNumber: "",
                postalCode: "",
                city: "",
            },

        });

        setD(l);

    }

    return (
 
        <div className="content overflow-y-scroll py-4 grid grid-cols-1 content-evenly justify-items-center">
            <form className="w-full max-w-lg p-4 bg-[--secondary] rounded">
                <h3 className="headline"> Diagnoseinfos </h3>
                
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                            Krankheit
                        </label>
                        <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                            json={d}
                            jsonPath="illness"
                            displayName="Krankheit"
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
                            selectables={enums.PossibleSeverities}
                        />

                    </div>

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                            Notizen
                        </label>
                        <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                            json={d}
                            jsonPath="description"
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
                    await createDiagnosis(patientId, d);
                    window.location.href = "/?patientId=" + patientId;
                }}
                >
                Speichern
            </button>

        </div>
         
     
    );
}
