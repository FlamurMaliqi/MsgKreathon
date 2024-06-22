import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function Befunde({onRowClick}: {onRowClick: any}){
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
    // Dummy-Daten aktualisieren
    const data = [
        {
            key: '0',
            data: { datum: '2024-01-01', typ: 'Impfung', diagnose: 'Impfstoff A', arzt: 'Dr. Müller', note: 'Nächster Termin: 2024-07-01' },
            children: [
                {
                    key: '0-0',
                    data: { datum: '', typ: 'Info', diagnose: '', arzt: '', note: 'Dies ist ein einfacher Text.' }
                }
            ]
        },
        {
            key: '1',
            data: { datum: '2023-06-01', typ: 'Impfung', diagnose: 'Impfstoff B', arzt: 'Dr. Schmidt', note: 'Nächster Termin: 2023-12-01' },
            children: [
                {
                    key: '1-0',
                    data: { datum: '', typ: 'Info', diagnose: '', arzt: '', note: 'Dies ist ein weiterer Text.' }
                }
            ]
        },
        // Hinzufügen weiterer Dummy-Daten
        {
            key: '2',
            data: { datum: '2023-08-15', typ: 'Check-up', diagnose: 'Allgemeine Untersuchung', arzt: 'Dr. Weber', note: 'Alles in Ordnung' },
            children: [
                {
                    key: '2-0',
                    data: { datum: '', typ: 'Info', diagnose: '', arzt: '', note: 'Nächste Untersuchung in einem Jahr.' }
                }
            ]
        },
        {
            key: '3',
            data: { datum: '2023-03-22', typ: 'Beratung', diagnose: 'Ernährungsberatung', arzt: 'Dr. Neumann', note: 'Ernährungsplan erhalten' },
            children: [
                {
                    key: '3-0',
                    data: { datum: '', typ: 'Info', diagnose: '', arzt: '', note: 'Folgetermin in 6 Monaten.' }
                }
            ]
        }
    ];

    setNodes(data);

    // Setzen der Daten für die Komponente (Annahme: es gibt einen State-Hook für nodes)
    // setNodes(data); // Diese Zeile einkommentieren, wenn ein State-Hook für nodes vorhanden ist
}, []); 

    return (
        <div className="h-full w-full overflow-y-scroll overflow-x-hidden">
            <TreeTable value={nodes} tableStyle={{ minWidth: '88vw' }} onRowClick={(e) => onRowClick(e)}>
                <Column field="datum" header="Datum"></Column>
                <Column field="typ" header="Typ"></Column>
                <Column field="diagnose" header="Diagnose"></Column>
                <Column field="arzt" header="Arzt"></Column>
                <Column field="note" header="Note"></Column>
            </TreeTable>
        </div>
    );
}