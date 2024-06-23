import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { FaFileContract, FaPills, FaStethoscope } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbVaccine } from 'react-icons/tb';
import account from '../api/account';

const SideNav = ({activeID}: {activeID: number}) => {

    var patientID = account.userId;
    if (account.isDoctor) {
        // get patientId from URL
        const urlParams = new URLSearchParams(window.location.search);
        patientID = parseInt(urlParams.get('patientId') || "-1");
       
    }

    const navItems = [
        { href: `./?patientId=${patientID}`, icon: <LuLayoutDashboard />, label: "Dashboard" },
        { href: `./Befunde?patientId=${patientID}`, icon: <FaFileContract />, label: "Befunde" },
        { href: `./Krankheitsbild?patientId=${patientID}`, icon: <FaStethoscope />, label: "Krankheitsbild" },
        { href: `./Medikamente?patientId=${patientID}`, icon: <FaPills />, label: "Medikamente" },
        { href: `./Impfungen?patientId=${patientID}`, icon: <TbVaccine />, label: "Impfungen" },
        { href: `./Graph?patientId=${patientID}`, icon: <BsGraphUp />, label: "Graph" }
    ];

    return (
        <aside className="sideNav h-[92vh] w-[12vw] bg-[var(--sideNav)]">
            <ul className="grid justify-center items-center p-4 w-[100%] h-[100%]">
                {navItems.map((item, index) => (
                    <li key={index} className={`side-nav-item text-[var(--onSecondary)] ${activeID === index ? 'active' : ''}`}>
                        <a className="side-nav-link flex flex-row items-center" href={item.href}>
                            {item.icon}
                            <span className="ml-2 responsiveDisplayNone">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideNav;
