"use client";
import Account from "../api/account";

export
 default function Home() {

    function login(isDoctor: boolean) {
        const patientId = document.getElementById('patientId') as HTMLInputElement;
        Account.login(isDoctor, parseInt(patientId.value));
    }

    return (
        <div className="h-[100vh] grid content-center justify-center w-[100vw]">
            <div className="w-[50vw] h-[max-content] flex flex-col gap-5 justify-center bg-gray-300 p-5">
                
            
                <h1 className="text-center text-4xl font-bold">Login</h1>

                <label className="text-center">Enter your ID</label>
                <input type="id" placeholder="ID" id="patientId" className="w-40 mx-auto border border-gray-300 rounded px-4 py-2"/>

                <button onClick={() => login(true)} className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                    Login as Doctor
                </button>

                <button onClick={() => login(false)} className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                    Login as Patient
                </button>

            </div>

        </div>
    )
}