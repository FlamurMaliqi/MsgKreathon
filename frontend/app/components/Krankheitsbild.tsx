import { Diagnosis } from '../api/diagnosis';
import Card from './Card';
import DialogComponent from "../components/Dialog";
import { useState } from 'react';

export default function Krankheitsbild({diagnoses}:{diagnoses: Diagnosis[]}) {
    const [open, setOpen] = useState(false);
    const [dialogData, setData] = useState(diagnoses);
    const [dialogContent, setDialogContent] = useState('' as string);

    const handleCardClick = (e: any) => {
        console.log(e);
        setOpen(true);
        setData(e.node.data);
    };

    return (
        <div className="grid grid-cols-3 gap-4 pt-4 w-max">
            {diagnoses.map((diagnosis, index) => (
                <div key={index} className='col-span-1 rounded-lg bg-gray-200' onClick={handleCardClick}>
                    <Card 
                        title={diagnosis.illness} 
                        text={
                            "Diagnose von: " + diagnosis.issuedBy.name + "\n" +
                            "Schweregrad: " + diagnosis.severity + "\n" +
                            "Diagnose am: " + new Date(diagnosis.dateDiagnosed).toLocaleDateString('de-DE') + "\n" +

                            diagnosis.description
                        }
                    />
                </div>
            ))}
            <DialogComponent openToggle={open} setOpen={setOpen} title={""} data={""}/>
        </div>
    );
}
