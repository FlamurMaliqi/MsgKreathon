"use client";
import React from 'react';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';

interface CalendarProps {
    data: Map<string, string[]>; // key: month/ kw value: list of meds / list of appointments
    mode: string;
}

const Calendar: React.FC<CalendarProps> = ({ data, mode }) => {
    const terminMap = new Map();
    terminMap.set("August", [{ date: "04.08.2024", time: "10:00", title: "Impfung" }, { date: "12.08.2024", time: "14:00", title: "Blutabnahme" }]);
    terminMap.set("September", [{ date: "01.09.2024", time: "12:00", title: "Stresstest" }, { date: "15.09.2024", time: "08:00", title: "OP-Vorbesprechung" }]);
    terminMap.set("Oktober", [{ date: "04.10.2024", time: "10:00", title: "Nasen-OP" }, { date: "12.10.2024", time: "14:00", title: "Nachuntersuchung" }]);
    terminMap.set("November", [{ date: "09.11.2024", time: "12:00", title: "Nachuntersuchung" }, { date: "25.11.2024", time: "18:00", title: "Blutabnahme" }]);
    // handle scroll to today 
    // make function automatically start with the view of today 

    return (
        <main className="main-grid grid min-h-screen">
            <HeaderNav />
            <SideNav activeID={42} />
            <div className="h-[100vh] w-[88vw] p-4 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">{mode}</h2>
                {Array.from(terminMap.entries()).map(([month, appointments]) => (
                    <div key={month} className="calendar-month mb-6 p-4 bg-white rounded shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{month}</h3>
                        <ul className="list-disc pl-5">
                            {appointments.map((termin: any, index: any) => (
                                <li key={index} className="mb-1">
                                    <span className="font-medium">{termin.date}</span> - <span>{termin.time}</span>: <span>{termin.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Calendar;
