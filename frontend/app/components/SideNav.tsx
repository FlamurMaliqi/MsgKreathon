import React from 'react';
import { FaFileContract, FaPills, FaStethoscope } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbVaccine } from 'react-icons/tb';
import account from '../api/account';

const SideNav = ({}) => {

    var patientID = account.userId;
    if (account.isDoctor) {
        // get patientId from URL
        const urlParams = new URLSearchParams(window.location.search);
        patientID = parseInt(urlParams.get('patientId') || "-1");
        if (patientID == -1) {
            alert("No patientId provided in URL");
        }
    }

    return (
        <aside className="sideNav h-[92vh] w-[12vw] bg-[var(--sideNav)]">
            <ul className="grid justify-center items-center p-4 w-[100%] h-[100%]">
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href={`./?patientId=${patientID}`}><LuLayoutDashboard/><span className="ml-2">Dashboard</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href={`./Befunde?patientId=${patientID}`}><FaFileContract /><span className="ml-2">Befunde</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href={`./Krankheitsbild?patientId=${patientID}`}><FaStethoscope /><span className="ml-2">Krankheitsbild</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href={`./Medikamente?patientId=${patientID}`}><FaPills /><span className="ml-2">Medikamente</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href={`./Impfungen?patientId=${patientID}`}><TbVaccine /><span className="ml-2">Impfungen</span></a></li>
            </ul>
        </aside>
    );
};

export default SideNav;