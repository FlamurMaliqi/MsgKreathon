import React from 'react';
import { FaFileContract, FaPills, FaStethoscope } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbVaccine } from 'react-icons/tb';

const SideNav = () => {
    return (
        <aside className="sideNav h-[92vh] w-[12vw] bg-[var(--sideNav)]">
            <ul className="grid justify-center items-center p-4 w-[100%] h-[100%]">
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href="/"><LuLayoutDashboard/><span className="ml-2">Dashboard</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href="/Befunde"><FaFileContract /><span className="ml-2">Befunde</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href="/Krankheitsbild"><FaStethoscope /><span className="ml-2">Krankheitsbild</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href="/Medikament"><FaPills /><span className="ml-2">Medikament</span></a></li>
                <li className="side-nav-item text-[var(--onSecondary)]"><a className="side-nav-link flex flex-row items-center" href="/Impfungen"><TbVaccine /><span className="ml-2">Impfungen</span></a></li>
            </ul>
        </aside>
    );
};

export default SideNav;