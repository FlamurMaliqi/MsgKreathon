"use client";
import React, {useEffect, useState} from 'react';
import AccordionElement from '../components/AccordionElement';
import { getDrugs } from '../api/drug';
import { Drug } from '../api/drug';

const Medikante: React.FC = () => {

    const [medikamente, setMedikamente] = useState<Drug[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<string[]>([]);

    const urlParams = new URLSearchParams(window.location.search)
    const patientId = parseInt(urlParams.get('patientId') || "1");
  
    useEffect(() => {
        getDrugs(patientId).then((drugs) => {
            setMedikamente(drugs);
            const labels: string[] = [];
            const values: string[] = [];
            drugs.forEach((medikament) => {
                labels.push(medikament.name);
                values.push(medikament.sideEffects);
            });
            setLabels(labels);

        });

    }, [medikamente, patientId]);


    return (
        <div className="Medikamente grid grid-cols-2">
            labels.map((label: string , index: any) {
                <AccordionElement labels={labels} values={values}/>
         })
        </div>
    );
};

export default Medikante;