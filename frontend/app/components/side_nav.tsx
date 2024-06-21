import React from 'react';

const SideNav = () => {
    return (
        <aside className="side-nav">
            <ul className="side-nav-list grid h-[92vh] bg-[var(--secondary)] w-[12vw] justify-center items-center pt-[8vh] p-4">
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