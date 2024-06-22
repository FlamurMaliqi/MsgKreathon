"use client";
import HeaderNav from "../../components/HeaderNav";
import SideNav from "../../components/SideNav";
import Input from "../../components/jsonUtil/jsonConnectedFormField";
import { useState, useEffect } from "react";
import { Doctor, getDoctor, updateDoctor } from "@/app/api/doctor";

export default function Home() {
    // const [d, setD] = useState(null as unknown as Doctor);

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search)
    //     const patientId = parseInt(urlParams.get('patientId') || "1");

    //     getDoctor(patientId).then((doctor) => setD(doctor));

    // }, []);

    // if (!d) {
    //     return <div>Loading...</div>;
    // }


    var d = new Doctor({
        doctorId: 1,
        name: "Max",
        surname: "Mustermann",
        email: "max@musterman.org",
        speciality: "Allgemeinmedizin",
        phone: "0123456789",
        street: "Musterstraße",
        houseNumber: "1",
        postalCode: "12345",
        city: "Musterstadt",
    });

    


    return (
        <main className="main-grid grid min-h-screen">
            <HeaderNav></HeaderNav>
            <SideNav />
            <div className="content h-[92vh] w-[88vw] overflow-y-scroll py-4 grid grid-cols-1 content-evenly justify-items-center">
                <form className="w-full max-w-lg p-4 bg-[--secondary] rounded">
                    <h3>Persönliche Informationen</h3>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-first-name">
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
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-last-name">
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
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
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
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
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

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-password">
                                Spezialisierung
                            </label>
                            <Input className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border border-[var(--onTritary)] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[var(--onTritary)]-500"
                                json={d}
                                jsonPath="speciality"
                                displayName="Spezialisierung"
                                updateFunction={() => {
                                    console.log(d.speciality)
                                }}></Input>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-city">
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

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-zip">
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
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-city">
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
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-zip">
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

                <button className="bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" 
                    type="button"
                    onClick={async () => {
                        await updateDoctor(d);
                        window.location.href = "/";
                    }}
                    >
                    Speichern
                </button>

            </div>
         
        </main>
    );
}