import React, { useState, useEffect, Children } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import DialogComponent from "../components/Dialog";
import { Diagnosis } from '../api/diagnosis';
import { Report, getReports } from '../api/report';
import { report } from 'process';

export default function Befunde() {
    const [nodes, setNodes] = useState([]);
    const [open, setOpen] = useState(false);
    const [dialogData, setData] = useState({} as any);
    const [dialogContent, setDialogContent] = useState('' as string);

    const handleRowClick = (e: any) => {
        console.log(e);
        setOpen(true);
        setData(e.node.data);
        
        const content:Report = e.node.report;

        setDialogContent(
            "Datum: " + content.date.toLocaleDateString("de-DE") + "\n" +
            "Typ: " + content.reportType + "\n" +
            "Diagnose: " + content.diagnosis.illness + "\n" +
            "Arzt: " + content.diagnosis.issuedBy.name + "\n" +
            "Note: " + content.findings + "\n" +
            "Findungen: " + content.findings + "\n" +
            "Empfehlungen: " + content.recommendations + "\n"
        );
    };

    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "1");

    useEffect(() => {
        // Dummy-Daten aktualisieren
        getReports(patientId).then((data) => {
            const d = data.map((item, index) => {
                return {
                    key: index,
                    data: {
                        datum: item.date.toLocaleDateString("de-DE"),
                        typ: item.reportType,
                        diagnose: item.diagnosis.illness,
                        arzt: item.diagnosis.issuedBy.name,
                        note: item.findings,
                        diagnosis: item.diagnosis
                    },
                    report: item
                }
            });
            setNodes(d);
        })
        

        



    }, []);

    return (
        <div className="h-full w-full overflow-y-scroll overflow-x-hidden">
            <TreeTable value={nodes} tableStyle={{ minWidth: '88vw' }} onRowClick={handleRowClick}>
                <Column field="datum" header="Datum"></Column>
                <Column field="typ" header="Typ"></Column>
                <Column field="diagnose" header="Diagnose"></Column>
                <Column field="arzt" header="Arzt"></Column>
                <Column field="note" header="Note"></Column>
            </TreeTable>
            <DialogComponent openToggle={open} setOpen={setOpen} title={dialogData.typ} data={dialogContent} />
        </div>
    );
}
