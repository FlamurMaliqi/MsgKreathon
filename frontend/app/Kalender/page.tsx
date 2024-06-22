"use client";
import React from 'react';

interface CalendarProps {
    data: Map<string, string[]>; // key: month/ kw value: list of meds / list of appointments
    mode: string;
}

const Calendar: React.FC<CalendarProps> = ({data, mode}) => {

    // handle scroll to today 
    // make function automatically start with the view of today 
    const handleToday = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
    }   

    const getData = (): any => {
        
    }

    if(!data) data = getData();

    let groupingBy: string = "Monat";
    if(mode === "meds") {
        groupingBy = "KW"
    }
    return (
        <div className="h-[100vh]">
            <h2 className="headline">{groupingBy}</h2>
            {data && Object.entries(data).map(([key, value]: [string, string[]]) => ( 
                <div className="calendar" key={key}>
                    <h1>{key}</h1>
                    <ul>
                        {value.map((med: string, index: number) => (
                            <li key={index}>{med}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>        
    );

};

export default Calendar;