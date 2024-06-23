"use client";
import Account from "../api/account";
import Logo from "../../public/logo_MedSync.png"
import Image from 'next/image';

export
 default function Home() {

    async function choosePatient() {
        const patientId = (document.getElementById("patientId") as HTMLInputElement).value;
        window.location.href = `/?patientId=${patientId}`;
    }

    return (
        <div className="h-[100vh] grid content-center justify-center w-[100vw] bg-[var(--primary)]">
            <div className="w-[30vw] h-[max-content] flex flex-col gap-5 justify-center bg-[var(--onTritary)] px-20 rounded py-10">
                <Image src={Logo} className="mx-auto" alt="logo"/>
                <h1 className="text-center text-4xl font-bold text-white">Partienten auswählen</h1>

                <label className="text-center text-white">Gebe sie die ID Ihres Partienten ein </label>
                <input type="id" placeholder="ID" id="patientId" className="w-40 mx-auto border border-gray-300 rounded px-4 py-2"/>

                <button onClick={() => choosePatient()} className="mx-auto bg-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-2 px-6 rounded">
                    Partient auswählen
                </button>

            </div>

        </div>
    )
}