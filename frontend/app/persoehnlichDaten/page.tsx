"use client";
import HeaderNav from "../components/HeaderNav";
import SideNav from "../components/SideNav";
import Input from "../components/jsonUtil/jsonConnectedFormField";
import { Doctor } from "../api/doctor";
import { EmergencyContact } from "../api/ermergency";

export default function Home() {
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
            <div className="content h-[92vh] w-[88vw] overflow-y-scroll py-4 grid grid-cols-2 content-evenly justify-items-center">
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

                <form className="w-full max-w-lg bg-[var(--secondary)] p-4 h-[90%] rounded">
                    <h3>Notfallkontakt</h3>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[var(--onTritary)] text-xs font-bold mb-2" htmlFor="grid-first-name">
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
            <button className="absolute bottom-5 right-5 bg-transparent hover:bg-[var(--primary)] text-[var(--primary)] font-semibold hover:text-[var(--onPrimary)] py-2 px-4 border border-[var(--primary)] hover:border-transparent rounded" type="submit">
                Speichern
            </button>
        </main>
    );
}