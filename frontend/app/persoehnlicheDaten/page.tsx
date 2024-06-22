"use client";
import { EmergencyContact, updateEmergencyContact, getEmergencyContact} from "@/app/api/ermergency";
import { Patient, updatePatient, getPatient } from "@/app/api/patient";
import { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import SideNav from "../components/SideNav";
import Input from "../components/jsonUtil/jsonConnectedFormField";

export default function Home() {
    // const [d, setD] = useState(null as unknown as Patient);
    // const [e, setE] = useState(null as unknown as EmergencyContact);

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search)
    //     const patientId = parseInt(urlParams.get('patientId') || "1");

    //     getPatient(patientId).then((patient) => {
    //         setD(patient);
    //     });
    //     getEmergencyContact(patientId).then((emergencyContact) => {
    //         setE(emergencyContact);
    //     });

    // }, []);
    
    // const urlParams = new URLSearchParams(window.location.search)
    // const patientId = parseInt(urlParams.get('patientId') || "1");


    // if (!d || !e) {
    //     return <div>Loading...</div>;
    // }


    var d = new Patient({
        patientId: 1,
        name: "TestDoktor",
        surname: "TestNachname",
        kvr: "123456789",
        email: "",
        phone: "",
        street: "",
        houseNumber: "",
        postalCode: "",
        city: "",
        birthday: "",
        weightKg: 0,
        heightCm: 0,
        familyDoctor: {
            name: "TestDoktor",
            surname: "TestNachname",
            email: "",
            phone: "",
            street: "",
            houseNumber: "",
            postalCode: "",
            city: "",
            speciality: ""
        },
        emergencyContact: {
            iceId: 1,
            name: "",
            patientId: "",
            surname: "",
            relationship: "",
            email: "",
            phone: "",
            street: "",
            houseNumber: "",
            postalCode: "",
            city: ""
        },
        healthInsuranceProvider: ""
    });
    
    var e = new EmergencyContact({
        iceId: 1,
        name: "",
        patientId: "",
        surname: "",
        relationship: "",
        email: "",
        phone: "",
        street: "",
        houseNumber: "",
        postalCode: "",
        city: ""
    });

    return (
        <main className="main-grid grid min-h-screen">
            <HeaderNav></HeaderNav>
            <SideNav />
            <div className="content h-[92vh] w-[88vw] overflow-y-scroll grid grid-cols-2 justify-items-center pt-4">
                <form className="w-full h-fit max-w-lg p-4 bg-[--secondary] rounded">
                    <h3 className="headline mb-4">Persönliche Informationen</h3>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-first-name">
                                Vorname
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border-[var(--onTritary)] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                json={d}
                                jsonPath="name"
                                displayName="Vorname"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}>
                            </Input>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-last-name">
                                Nachname
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="surname"
                                displayName="Nachname"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-password">
                                Email
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="email"
                                displayName="email"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-password">
                                Telefonnummer
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="phone"
                                displayName="telefonnummer"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-1">
                        <div className="w-full md:w-2/3 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-city">
                                Straße
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="street"
                                displayName="straße"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-zip">
                                Hausnummer
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="houseNumber"
                                displayName="Hausnummer"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-1">
                        <div className="w-full md:w-2/3 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-city">
                                Stadt
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="city"
                                displayName="Stadt"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-zip">
                                Postleitzahl
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="postalcode"
                                displayName="PLZ"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                </form>

                <form className="w-full max-w-lg bg-[var(--secondary)] p-4 h-fit rounded">
                    <h3 className="headline mb-4">Notfallkontakt</h3>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-first-name">
                                Vorname
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                json={d}
                                jsonPath="name"
                                displayName="Vorname"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-last-name">
                                Nachname
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="surname"
                                displayName="Nachname"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-password">
                                Telefonnummer
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="phone"
                                displayName="telefonnummer"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-1" htmlFor="grid-password">
                                Beziehung
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="relationship"
                                displayName="Beziehung"
                                updateFunction={() => {
                                    console.log(d.name)
                                }}></Input>
                        </div>
                    </div>
                </form>
            </div>
            <button className="absolute bottom-5 right-5 bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" 
                type="button"
                onClick={async () => {
                    await updatePatient(d);
                    await updateEmergencyContact(d.id!, e);
                    window.location.href = "/";
                }}
            >
                Speichern
            </button>

            <button className="absolute bottom-5 left-[15vw] bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" 
                type="button"
                onClick={async () => {
                    localStorage.clear();
                    window.location.href = "/login";
                }}
            >
                Abmelden
            </button>
        </main>
    );
}