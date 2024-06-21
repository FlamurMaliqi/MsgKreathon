import React from 'react';

const SideNav = () => {
    return (
        <aside className="h-[92vh] w-[12vw] bg-[var(--secondary)] mt-[8vh] ">
            <ul className="grid justify-center items-center p-4 w-[100%] h-[100%]">
                <li className="side-nav-item"><a className="side-nav-link" href="/#">Dashboard</a></li>
                <li className="side-nav-item"><a className="side-nav-link" href="/#">Befunde</a></li>
                <li className="side-nav-item"><a className="side-nav-link" href="/#">Krankheitsbild</a></li>
                <li className="side-nav-item"><a className="side-nav-link" href="/#">Medikament</a></li>
                <li className="side-nav-item"><a className="side-nav-link" href="/#">Impfungen</a></li>
            </ul>
        </aside>
    );
};

export default SideNav;