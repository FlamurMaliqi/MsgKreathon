import React from 'react';

const SideNav = () => {

    return (
        <aside>
            <ul className="grid h-[92vh] bg-[var(--secondary)] w-[20vw] justify-start ">
                <li><a href="/#">Dashboard</a></li>
                <li><a href="/#">Befunde</a></li>
                <li><a href="/#">Krankheitsbild</a></li>
                <li><a href="/#">Medikament</a></li>
                <li><a href="/#">Impfungen</a></li>
            </ul>
        </aside>
    );
};

export default SideNav;