import React from 'react'; 
import 'primeicons/primeicons.css';
import Icon from "../../public/logo_MedSync.png"
import Image from 'next/image';
import Account from "../api/account";
import account from '../api/account';
export default function HeaderNav() {
     
    const urlParams = new URLSearchParams(window.location.search)
    var patientId = parseInt(urlParams.get('patientId') || "-1");

    if (patientId == -1 && !Account.isDoctor) {
        patientId = Account.userId;
    }

    const items = [
        {
            label: 'Kalender',
            icon: 'pi pi-calendar'
        },
        {
            label: 'profile',
            icon: 'pi pi-user'
        },
    ];

    return (
        <header className="headerNav bg-[var(--primary)] text-[var(--onPrimary)] h-[8vh] content-center">
            <ul className="flex justify-between items-center p-4">
                <li className="flex flex-cols"><a href=""><Image src={Icon} alt="Logo" className="w-[90px]"/></a> <a href="./Kalender" className={Account.isDoctor ? "hidden": "hover:border-b-[1.5px] ml-[1.5vw]"}><span className="responsiveDisplayNone">Kalender</span><span className="pi pi-calendar ml-[1.5vw]"/></a></li>
               
                <li className="hover:border-b-[1.5px]">
                    <a 
                        href={(!account.isDoctor? "./persoehnlicheDaten" : "./doctor/persoehnlichDaten") + "?patientId=" +patientId }
                    >

                    {Account.loggedIn ? Account.userName : 'Nicht Eingeloggt!'}
                <span className="pi pi-user ml-2">
                </span></a></li>
            </ul>
        </header>
    )
}
        