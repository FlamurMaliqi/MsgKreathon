import { Diagnosis } from '../api/diagnosis';
import Card from './Card';
import DialogComponent from "../components/Dialog";
import { useState } from 'react';

export default function Krankheitsbild({diagnoses}:{diagnoses: Diagnosis[]}) {
    const [open, setOpen] = useState(false);
    const [dialogData, setData] = useState(diagnoses);
    const [dialogContent, setDialogContent] = useState('' as string);

    const handleCardClick = (diagnosis:Diagnosis) => {
        console.log(diagnosis);
        setDialogContent(
            diagnosis.illness + "\n" +
            "Diagnose von: " + diagnosis.issuedBy.name + "\n" +
            "Schweregrad: " + diagnosis.severity + "\n" +
            "Diagnose am: " + new Date(diagnosis.dateDiagnosed).toLocaleDateString('de-DE') + "\n" +
            diagnosis.description
        );
        setOpen(true);
    };

    if (diagnoses.length === 0) {
        return (
            <div className="flex items-start justify-center h-full w-full">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Keine Diagnosen registriert</h2>
                    <p className="text-gray-700">Es sind derzeit keine Diagnosen registriert. Bitte versuchen Sie es später erneut oder wenden Sie sich an Ihren Arzt.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4 w-max">
            {diagnoses.map((diagnosis, index) => (
                <div key={index} className="col-span-1 rounded-lg bg-gray-200" onClick={(e)=>{handleCardClick(diagnosis)}}>
                    <Card 
                        title={diagnosis.illness} 
                        text={
                            "Diagnose von: " + diagnosis.issuedBy.name + " " + diagnosis.issuedBy.surname + "\n" +
                            "Schweregrad: " + diagnosis.severity + "\n" +
                            "Diagnose am: " + new Date(diagnosis.dateDiagnosed).toLocaleDateString('de-DE') + "\n" +

                            diagnosis.description
                        }
                    />
                </div>
            ))}
            <DialogComponent openToggle={open} setOpen={setOpen} title={"Diagnose"} data={dialogContent}/>
        </div>
    );
}
