"use client";
import Account from "../../api/account";
import { Doctor, getDoctor, addPatientToDoctor} from "../../api/doctor";
export
 default function Home() {
    
    // if (!Account.loggedIn || !Account.isDoctor) {
    //     location.href = '/';
    // }

    function addPatient() {
        const patientId = document.getElementById('patientId') as HTMLInputElement;
        const doctorId = Account.userId;
        var success = true;
        addPatientToDoctor(doctorId, parseInt(patientId.value)).catch((error) => {
            alert("Patient konnte nicht hinzugefügt werden");
            success = false;
        }).then(() => {
            if (success)
                alert("Patient wurde hinzugefügt");
        });
    }

    return (
        <div className="h-[100vh] grid content-center justify-center w-[100vw]">
            <div className="w-[50vw] h-[max-content] flex flex-col gap-5 justify-center bg-gray-300 p-5">
                
            
                <h1 className="text-center text-4xl font-bold">Patient hinzufügen</h1>

                <label className="text-center"> Patienten ID</label>
                
                <input type="id" placeholder="ID" id="patientId" className="w-40 mx-auto border border-gray-300 rounded px-4 py-2"/>


                <button 
                    className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                    onClick={() => addPatient()}
                >

                    Hinzufügen
                </button>



            </div>

        </div>
    )
}