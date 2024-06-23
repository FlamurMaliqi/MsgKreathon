"use client"
import { useState, useEffect } from 'react';

export default function GraphWindow({ initialTab }) {
    const [selectedTab, setSelectedTab] = useState(initialTab);

    useEffect(() => {
        setSelectedTab(initialTab);
    }, [initialTab]);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
               
                <li className="me-2">
                    <a
                        href="../Blutzuckerspiegel"
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Blutzucker' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        onClick={() => handleTabClick('Blutzucker')}
                    >
                        Blutzucker
                    </a>
                </li>
                 <li className="me-2">
                    <a
                        href="../Graph"
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Bluthochdruck' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        onClick={() => handleTabClick('Bluthochdruck')}
                    >
                        Bluthochdruck
                    </a>
                </li><li className="me-2">
                    <a
                        href="../Gewicht"
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Gewicht' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        onClick={() => handleTabClick('Gewicht')}
                    >
                        Gewicht
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="../Schlaf"
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === 'Schlaf' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                        onClick={() => handleTabClick('Schlaf')}
                    >
                        Schlaf
                    </a>
                </li>
            </ul>
        </div>
    );
}
