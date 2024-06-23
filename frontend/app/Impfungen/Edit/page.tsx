"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Vaccination, updateVaccination, getVaccination, createVaccination } from "@/app/api/vaccination";
import { Doctor } from "@/app/api/doctor";
import JsonConnectedDatePicker from "@/app/components/jsonUtil/jsonConnectedDate";
import account from "@/app/api/account";

export default function Home() {
    const [d, setD] = useState(null as unknown as Vaccination);

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

    if (!account.loggedIn || !account.isDoctor) {
        return <div> No Permission to create this </div>
    }

    // get patient id from url
    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "-1");

    if (d == null) {
        const l = new Vaccination({
            id: undefined,
            vaccineName: "",
            vaccinationDate: (new Date()).toDateString(),
            administeringDoctor: {
                doctorId: account.userId,
                name: "",
                surname: "",
                email: "",
                phone: "",
                speciality: "",
                street: "",
                houseNumber: "",
                city: "",
                postalcode: ""
            },
            patientId: patientId,
            dose: "",
            notificationDate: (new Date().toDateString()),
        });
        setD(l);
    }



    return (

            <div className="content overflow-y-scroll py-4 grid grid-cols-1 content-evenly justify-items-center">
                <form className="max-w-lg p-4 bg-[--secondary] rounded">
                    <h3>Impfungsinformationen </h3>
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Name
                            </label>
                            <Input className="appearance-none block bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="vaccineName"
                                displayName="Impfstoff"
                                updateFunction={() => {
                                }}></Input>
                        </div>

                        <div className="px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Dosis
                            </label>
                            <Input className="appearance-none block bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="dose"
                                displayName="Dosis"
                                updateFunction={() => {
                                }}></Input>
                        </div>

                        <div className="px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Benachrichtigungsdatum
                            </label>
                            <JsonConnectedDatePicker
                                className="appearance-none block bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="notificationDate"
                                displayName="Benachrichtigungsdatum"
                                updateFunction={() => {
                                }}
                            />
                        </div>
                        
                    </div>
                   
                   


                </form>

                <button 
                    className="justify-self-start relative left-0 bottom-[-16px] hover:bg-[var(--primary)] hover:text-[var(--onPrimary)] mt-3 inline-flex w-full justify-center rounded-md bg-white p-1 text-sm font-semibold text-gray-900 shadow-sm border border-[var(--primary)] sm:mt-0 sm:w-auto"
                    type="button"
                    onClick={async () => {
                        await createVaccination(patientId, d);
                        window.location.href = `/Impfungen?patientId=${patientId}`;
                    }}
                    >
                    Speichern
                </button>
            </div>
    );
}
