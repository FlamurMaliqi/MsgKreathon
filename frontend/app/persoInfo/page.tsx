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

            <form className="w-full max-w-lg">
                <h3>Persönliche Informationen</h3>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            json={d}
                            jsonPath="name"
                            displayName="Vorname"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            email
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Telefonnummer
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Straße
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            json={d}
                            jsonPath="street"
                            displayName="straße"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Hausnummer
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            json={d}
                            jsonPath="city"
                            displayName="Stadt"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            PLZ
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            json={d}
                            jsonPath="postalcode"
                            displayName="PLZ"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                    </div>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
                    Ändern
                </button>
            </form>

            <form className="w-full max-w-lg">
                <h3>Notfallkontakt</h3>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            json={d}
                            jsonPath="name"
                            displayName="Vorname"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Telefonnummer
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Beziehung
                        </label>
                        <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            json={d}
                            jsonPath="relationship"
                            displayName="Beziehung"
                            updateFunction={() => {
                                console.log(d.name)
                            }}></Input>
                    </div>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
                    Ändern
                </button>
            </form>
        </main>
    );
}