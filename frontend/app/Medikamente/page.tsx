"use client";
import React, { useEffect, useState } from 'react';
import AccordionElement from '../components/AccordionElement';
import { getDrugs } from '../api/drug';
import { Drug } from '../api/drug';
import HeaderNav from '../components/HeaderNav';
import SideNav from '../components/SideNav';
import AddDialog from '../components/AddDialog';
import { IoAddSharp } from 'react-icons/io5';
import account from '../api/account';

const Medikante: React.FC = () => {

    const [open, setOpen] = useState(false);
    const handleToggleDialog = () => {
        setOpen(true);
    };

    const [medikamente, setMedikamente] = useState<Drug[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<string[]>([]);

    const urlParams = new URLSearchParams(window.location.search);
    const patientId = parseInt(urlParams.get('patientId') || "-1");
    if (patientId == -1) {
       alert("No patientId provided in URL");
    }
    useEffect(() => {
        getDrugs(patientId).then((drugs) => {
            setMedikamente(drugs);
            var labels: string[] = [];
            var values: string[] = [];
            drugs.forEach((medikament) => {
                labels.push(medikament.dosage + " " + medikament.name);
                values.push(
                    "Einnahme: " + medikament.frequency + "\n" +
                    "Start: " + new Date(medikament.startDate).toLocaleDateString('de-DE') + "\n" +
                    "Ende: " + new Date(medikament.endDate).toLocaleDateString('de-DE') + "\n" +
                    "Verschrieben von: " + medikament.prescribingDoctor.name + "\n" +
                    "Nebenwirkungen: " + medikament.sideEffects + "\n"
                );
            });
            setLabels(labels);
            setValues(values);
        });

    }, [patientId]);

    return (
        <main className="main-grid grid">
            <HeaderNav />
            <SideNav activeID={3} />
            <div className="content h-[92vh] overflow-scroll p-4 w-[88vw]">
                {medikamente.length === 0 ? (
                    <div className="flex items-start justify-center h-full w-full">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">Keine Medikamente registriert</h2>
                            <p className="text-gray-700">Es sind derzeit keine Medikamente registriert. Bitte versuchen Sie es später erneut oder wenden Sie sich an Ihren Arzt.</p>
                        </div>
                    </div>
                ) : (
                    <div className="Medikamente grid grid-cols-2 gap-8">
                        {labels.map((label, index) =>
                            <AccordionElement key={index} labels={[label]} values={[values[index]]} />
                        )}
                    </div>
                )}
            </div>
            <span className={account.isDoctor ? "absolute z-40 right-4 bottom-4" : "hidden"}>
                <IoAddSharp size={50} className="bg-black rounded-full text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()} />
            </span>
            <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />
        </main>
    );
};

export default Medikante;
