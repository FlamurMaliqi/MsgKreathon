"use client"
import { useState, useEffect, SetStateAction } from 'react';

export default function GraphWindow({ initialTab }: { initialTab: string }) {
    const [selectedTab, setSelectedTab] = useState(initialTab);

    // get patient id from url
    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "-1");

    useEffect(() => {
        setSelectedTab(initialTab);
    }, [initialTab]);

    const handleTabClick = (tab: SetStateAction<string>) => {
        setSelectedTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
            <ul className="flex flex-wrap -mb-px justify-center">
                <li className="me-2">
                    <a
                        href={`../Blutzuckerspiegel?patientId=${patientId}`}
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Blutzucker' ? 'text-[var(--primary)] border-[var(--primary)] dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-[var(--onTritary)] hover:border-[var(--onTritary)] dark:hover:text-[var(--onTritary)]'}`}
                        onClick={() => handleTabClick('Blutzucker')}
                    >
                        Blutzucker
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href={`../Graph?patientId=${patientId}`}
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Bluthochdruck' ? 'text-[var(--primary)] border-[var(--primary)] dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-[var(--onTritary)] dark:hover:text-[var(--onTritary)]'}`}
                        onClick={() => handleTabClick('Bluthochdruck')}
                    >
                        Bluthochdruck
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href={`../Gewicht?patientId=${patientId}`}
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Gewicht' ? 'text-[var(--primary)] border-[var(--primary)] dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-[var(--onTritary)] dark:hover:text-[var(--onTritary)]'}`}
                        onClick={() => handleTabClick('Gewicht')}
                    >
                        Gewicht
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href={`../Schlaf?patientId=${patientId}`}
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Schlaf' ? 'text-[var(--primary)] border-[var(--primary)] dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-[var(--onTritary)] dark:hover:text-[var(--onTritary)]'}`}
                        onClick={() => handleTabClick('Schlaf')}
                    >
                        Schlaf
                    </a>
                </li>
            </ul>
        </div>
    );
}
