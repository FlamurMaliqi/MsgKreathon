import React, { useState, useEffect, Children } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import DialogComponent from "../components/Dialog";
import { Diagnosis } from '../api/diagnosis';
import { Report } from '../api/report';
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

    useEffect(() => {
        // Dummy-Daten aktualisieren
        const data = [
            new Report({
                id: 1,
                patientId: 1,
                date: new Date(),
                diagnosis: new Diagnosis({
                    id: 1,
                    patientId: 1,
                    issuedBy: {
                      id: 1,
                      name: "Dr. Mustermann",
                      address: "Musterstraße 1",
                      phone: "0123456789",
                      email: " ",
                      speciality: "Allgemeinmedizin"
                    },
                    illness: "Diabetis",
                    description: "Husten seit 3 Wochen",
                    severity: "Mittel",
                    dateDiagnosed: new Date()
                }),
                findings: "Husten seit 3 Wochen",
                recommendations: "Viel trinken",
                reportType: "Arztbrief",
            }),
        ];
        
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
