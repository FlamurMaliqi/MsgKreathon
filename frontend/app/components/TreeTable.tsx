"use client"

import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function BasicDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        // Dummy-Daten für Testzwecke
        const data = [
            {
                key: '0',
                data: { art: 'Impfung', datum: '2024-01-01', impfstoffname: 'Impfstoff A', arzt: 'Dr. Müller', naechsterTermin: '2024-07-01' },
                children: [
                    {
                        key: '0-0',
                        data: { art: 'Info', datum: '', impfstoffname: '', arzt: '', naechsterTermin: 'Dies ist ein einfacher Text.' }
                    }
                ]
            },
            {
                key: '1',
                data: { art: 'Impfung', datum: '2023-06-01', impfstoffname: 'Impfstoff B', arzt: 'Dr. Schmidt', naechsterTermin: '2023-12-01' },
                children: [
                    {
                        key: '1-0',
                        data: { art: 'Info', datum: '', impfstoffname: '', arzt: '', naechsterTermin: 'Dies ist ein weiterer Text.' }
                    }
                ]
            }
        ];

        setNodes(data);
    }, []);

    return (
        <div className="card h-[100vh]">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="art" header="Art" expander></Column>
                <Column field="datum" header="Datum"></Column>
                <Column field="impfstoffname" header="Impfstoffname"></Column>
                <Column field="arzt" header="Arzt"></Column>
                <Column field="naechsterTermin" header="Nächster Termin"></Column>
            </TreeTable>
        </div>
    );
}
