"use client";
import React, {useEffect, useState} from 'react';
import AccordionElement from '../components/AccordionElement';
import { getDrugs } from '../api/drug';
import { Drug } from '../api/drug';
import { Accordion } from 'primereact/accordion';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';

const Medikante: React.FC = () => {

    // const [medikamente, setMedikamente] = useState<Drug[]>([]);
    // const [labels, setLabels] = useState<string[]>([]);
    // const [values, setValues] = useState<string[]>([]);

    // const urlParams = new URLSearchParams(window.location.search)
    // const patientId = parseInt(urlParams.get('patientId') || "-1");
    // if (patientId == -1) {
    //    alert("No patientId provided in URL")
    // }
    // useEffect(() => {
    //     getDrugs(patientId).then((drugs) => {
    //         setMedikamente(drugs);
    //         var labels: string[] = [];
    //         var values: string[] = [];
    //         drugs.forEach((medikament) => {
    //             labels.push(medikament.dosage + " " + medikament.name);
    //             values.push(
    //                 "Einnahme: " + medikament.frequency + "\n" +
    //                 "Start: " + new Date(medikament.startDate).toLocaleDateString('de-DE') + "\n" +
    //                 "Ende: " + new Date(medikament.endDate).toLocaleDateString('de-DE') + "\n" +
    //                 "Verschrieben von: " + medikament.prescribingDoctor.name + "\n" +
    //                 "Nebenwirkungen: " + medikament.sideEffects + "\n"
    //             );
    //         });
    //         setLabels(labels);
    //         setValues(values);
    //     });

    // }, [medikamente, patientId]);

    const labels = ["Ibuprofen", "Paracetamol", "Aspirin"];

    const values = [
        "Einnahme: 2x täglich\nStart: 2022-10-01\nEnde: 2022-10-15\nVerschrieben von: Dr. Müller\nNebenwirkungen: Kopfschmerzen, Übelkeit",
        "Einnahme: 1x täglich\nStart: 2022-09-15\nEnde: 2022-09-30\nVerschrieben von: Dr. Schmidt\nNebenwirkungen: Schwindel, Magenschmerzen",
        "Einnahme: 3x täglich\nStart: 2022-09-01\nEnde: 2022-09-14\nVerschrieben von: Dr. Wagner\nNebenwirkungen: Müdigkeit, Hautausschlag"
    ];


    return (
        <main className="main-grid grid">
        <HeaderNav/>
        <SideNav/>
          <div className="content h-[92vh] overflow-scroll p-4 w-[88vw]">
            <div className="Medikamente grid grid-cols-2 gap-8">
                {labels.map((label, index) =>
                    <AccordionElement key={index} labels={[label]} values={[values[index]]}/>
                )}
            </div>
        </div>
        </main>
    );
};

export default Medikante;